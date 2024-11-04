import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { motion as m } from 'framer-motion';
import { customVariants } from '../../../lib/animation';

const Contact = () => {
	return (
		<Flex
			as={m.div}
			variants={customVariants}
			initial="hidden"
			animate="visible"
			alignItems="center"
			justify="center"
			flexDir="column"
			py={20}
			px={4}
			mx="auto"
			maxW="3xl"
			textAlign="center"
		>
			<Heading mb={6} as="h1" size="2xl" color="purple.500">
				Contact Me
			</Heading>
			<Text mb={8} fontSize="lg" color="gray.300" maxW="lg">
				I'm currently open to new job opportunities and would be delighted to
				hear from you! Whether you have a specific question, a potential
				collaboration, or simply want to say hello, don't hesitate to reach out!
			</Text>
			<Button
				colorScheme="purple"
				variant="outline"
				size="lg"
				as="a"
				rel="noopener noreferrer"
				href="mailto:bradsamuel97@gmail.com"
				target="_blank"
				mb={4}
				textDecoration="none"
			>
				Say Hello
			</Button>
		</Flex>
	);
};

export default Contact;
