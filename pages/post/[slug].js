// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import ReactMarkdown from 'react-markdown'
import client from '../../client'
import {Container, Heading, Text, Tag, Box,  HStack } from '@chakra-ui/react'
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  //if(!post) return null
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    <Container> 
    <article>
      <Box>
      <Heading as='h1' size='lg'>{title}</Heading>
      <Text fontSize='lg'>By {name}</Text>
      {categories && (
        <HStack spacing={4}>
          {categories.map(category => <Tag key={category}>{category}</Tag>)}
        </HStack>
    
      )}
      </Box>
      <ReactMarkdown>{body}</ReactMarkdown>
    </article>
    </Container>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
  
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post