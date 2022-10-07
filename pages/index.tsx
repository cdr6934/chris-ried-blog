import type { NextPage } from 'next'
import { Container, Heading, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
  <Container>
<Heading size={useBreakpointValue({ base: 'md', md: 'lg' })}>Latest Updates</Heading>
  </Container>
  )
}

export default Home
