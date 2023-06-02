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
			flexDir="column"
			m="50px 0px 40px 0px"
		>
			<Heading mb="30px" as="h1">
				Contact Me
			</Heading>
			<Text mb="30px">
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
				mb="20px"
				textDecorationStyle="none"
			>
				Say Hello
			</Button>
		</Flex>
	);
};

export default Contact;
