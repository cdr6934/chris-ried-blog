import * as React from 'react';
import {
  Stack,
  Heading,
  Text,
  Box,
  useBreakpointValue,
  Input,
  Button,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import client from '../client';
import groq from 'groq';
import Link from 'next/link';

const Blog = ({posts}) => {
  return (
    <Box pt="8" pb="16">
      <Stack spacing={{base: '8', md: '10'}} align="center">
        <Stack spacing={{base: '4', md: '6'}} textAlign="center">
          <Stack spacing="4">
            <Text
              fontWeight="semibold"
              color="accent"
              fontSize={{base: 'sm', md: 'md'}}
            >
              Our Blog
            </Text>
            <Heading size={useBreakpointValue ({base: 'md', md: 'lg'})}>
              Latest Updates
            </Heading>
          </Stack>
          <Text fontSize={{base: 'lg', md: 'xl'}} maxW="2xl" color="muted">
            A little technical blogposts on technology, data science, and a smattering of other interests
          </Text>
        </Stack>

        <Stack maxW={{md: 'lg'}} width="full">
          <UnorderedList spacing={5}>
            {posts.length > 0 &&
              posts.map (
                ({_id, title = '', slug = '', publishedAt = ''}) =>
                  slug &&
                  <ListItem key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                      <Text fontSize={{base: 'lg', md: 'xl'}} maxW="2xl">
                        {title}
                      </Text>
                    </Link>{' '}
                    <Text>{new Date (publishedAt).toDateString ()}</Text>
                  </ListItem>
              )}
          </UnorderedList>
        </Stack>
      </Stack>

    </Box>
  );
};

export async function getStaticProps () {
  const posts = await client.fetch (groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
