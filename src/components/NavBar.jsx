import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
					<Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
						<Heading as="h2" size="lg" letterSpacing={'tighter'}>
							Samuel
						</Heading>
					</Link>
				</Flex>

				<Stack
					direction={{ base: 'column', md: 'row' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
					justifyContent="flex-end"
				>
					<Link
						to={'/projects'}
						style={{
							padding: '0px 20px 0px 0px',
							fontWeight: '900',
							color: 'white'
						}}
					>
						Projects
					</Link>
					<Link
						to={'/contact'}
						style={{
							fontWeight: '900',
							color: 'white',
						}}
					>
						Contact
					</Link>
				</Stack>
			</Container>
		</Box>
	);
};

export default NavBar;
