
  import * as React from 'react'
  import { Stack, Heading, Text, Box, useBreakpointValue, Input, Button } from '@chakra-ui/react'
  
const Blog = () => { 

    return (  <Box pt="8" pb="16">
    <Stack spacing={{ base: '8', md: '10' }} align="center">
      <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
        <Stack spacing="4">
          <Text fontWeight="semibold" color="accent" fontSize={{ base: 'sm', md: 'md' }}>
            Our Blog
          </Text>
          <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>Latest Updates</Heading>
        </Stack>
        <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
          Ice cream pudding dragée macaroon donut marzipan chocolate
        </Text>
      </Stack>

      <Stack
        as="form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
        direction={{ base: 'column', md: 'row' }}
        spacing="4"
        justify="center"
      >
        <Stack maxW={{ md: 'lg' }} width="full">
          <Input
            size="lg"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="false"
          />
          <Text fontSize="sm" textAlign={{ base: 'center', md: 'start' }} color="subtle">
            We care about your data in our privacy policy
          </Text>
        </Stack>
        <Button size="lg" colorScheme="teal" type="submit">
          Subscribe
        </Button>
      </Stack>
    </Stack>
  </Box>)
}

export default Blog 