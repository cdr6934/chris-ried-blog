import type { NextPage } from 'next'
import { Container, Heading, useBreakpointValue, Text, Stack,Box, Input, Button, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
  <Container>
<Box pt="8" pb="16">
    <Stack spacing={{ base: '8', md: '10' }} align="center">
      <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
        <Stack spacing="4">
          <Text fontWeight="semibold" color="accent" fontSize={{ base: 'sm', md: 'md' }}>
            Welcome!
          </Text>
          <Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>Latest Updates</Heading>
        </Stack>
        <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
          Ice cream pudding dragée macaroon donut marzipan chocolate
        </Text>
      </Stack>
     
    </Stack>
  </Box>
  <Divider/> 
  </Container>
  )
}

export default Home
