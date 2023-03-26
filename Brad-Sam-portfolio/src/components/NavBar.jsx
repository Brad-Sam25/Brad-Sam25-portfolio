import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box
        position="fixed"
        as="nav"
        width="100%"
        backgroundColor="transparent"
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
                <Heading as="h2" size="lg" letterSpacing={'tighter'}>
                    Samuel
                </Heading>
            </Flex>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
                justifyContent="flex-end"
            >
                <Link
                    to={'/projects'}
                    p={2}
                >
                    Projects
                </Link>
                <Link
                    to={'/contact'}
                    p={2}
                >
                    Contact
                </Link>
            </Stack>
        </Container>
    </Box>
  )
}

export default NavBar