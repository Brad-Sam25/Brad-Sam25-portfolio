import { Image, Text, Flex, Badge } from '@chakra-ui/react';
import { motion as m } from 'framer-motion';
import React from 'react';

const ProjectCard = (props) => {
	return (
		<>
			<Flex
				borderRadius="20px"
				bg="#373459"
				p="20px"
				height="445px"
				w={{ base: '225px', md: '245px' }}
				alignItems="center"
				direction="column"
			>
				<Flex w="100%" mb="18px">
					<Text
						my="auto"
						color="white"
						fontWeight="900"
						fontSize="lg"
						me="auto"
					>
						{props.title}
					</Text>
				</Flex>
				<a target="_blank" href={props.siteLink}>
					<Image
						as={m.img}
						whileHover={{ scale: 1.1 }}
						src={props.imageUrl}
						alt={props.imageTitle}
						borderRadius="20px"
						mb="10px"
						w="180px"
						h="140px"
					/>
				</a>
				<Text
					color="white"
					fontWeight="600"
					textAlign="start"
					fontSize="md"
					mb="10px"
					w="100%"
				>
					{props.description}
				</Text>
				<Flex mt="auto" w="100%" align="center" flexWrap="wrap">
						{props.technologies.map((tech, index) => (
							<Badge
								key={index}
								borderRadius="9px"
								size="md"
								// color="#319795"
								textAlign="center"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								colorScheme='purple'
								margin="0px 4px 5px 0px"
							>
								{tech}
							</Badge>
						))}
				</Flex>
			</Flex>
		</>
	);
};

export default ProjectCard;
