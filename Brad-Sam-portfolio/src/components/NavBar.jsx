import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function NavBar() {
  return (
    <Box
        position="fixed"
        as="nav"
        width="100%"
        backgroundColor="#C0B9CC"
        color="white"
        css={{ backdropFilter: 'blur(35px)' }}
        zIndex={2}
    >
        <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justifyContent="flex-start"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    Samuel
                </Heading>
            </Flex>
        </Container>
    </Box>
  )
}

export default NavBar