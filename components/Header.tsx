import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Link
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi'
  import { Logo } from './Logo' 


const Header = () => { 
    const isDesktop = useBreakpointValue({base: false, lg: true})
    const navLength = [
      {name: "Home", link: '/'}, 
      {name: "Blog", link: '/blog'},
      {name: "About", link:'/about'}, 
      {name: "Contact", link:'/about'}
    ]
return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Container py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between">
          <HStack spacing="4">
            <Logo />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                {navLength.map((nav, idx) => (
                    <Link key={idx} href={nav.link} >
                      <Button key={idx}>{nav.name}</Button>
                    </Link>
                  ))}
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
              </ButtonGroup>
            
            </HStack>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </Flex>
      </Container>
    </Box>
  </Box>
)
}

export default Header; 