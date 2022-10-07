import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    color="accent"
    height="8"
    width="auto"
    viewBox="0 0 482 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
  </chakra.svg>
)

export default Logo