import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.green },
    },
    theme,
  )

  return ( 
    <ChakraProvider theme={myTheme}>
          <Header/> 
  <Component {...pageProps} />
    <Footer/>
  </ChakraProvider>
  )
}

export default MyApp
