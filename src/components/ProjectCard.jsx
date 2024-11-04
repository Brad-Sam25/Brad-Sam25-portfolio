import { Image, Text, Flex, Badge, Box } from '@chakra-ui/react';
import { motion as m } from 'framer-motion';
import React from 'react';

const ProjectCard = (props) => {
	return (
		<Flex
			as={m.div}
			whileHover={{ y: -5, boxShadow: 'lg' }}
			bg="gray.800"
			borderRadius="xl"
			p="6"
			direction="column"
			justifyContent="space-between"
			maxW="280px"
			w="full"
			h="auto"
			transition="all 0.3s ease"
			border="1px solid"
			borderColor="gray.700"
			_hover={{
				borderColor: 'purple.400',
				transform: 'translateY(-5px)',
				shadow: 'xl',
			}}
		>
			{/* Project Title */}
			<Text
				color="white"
				fontWeight="bold"
				fontSize="lg"
				textAlign="center"
				mb={4}
				noOfLines={1}
			>
				{props.title}
			</Text>

			{/* Project Image */}
			<a href={props.siteLink} target="_blank" rel="noopener noreferrer">
				<Image
					as={m.img}
					whileHover={{ scale: 1.05 }}
					src={props.imageUrl}
					alt={props.imageTitle}
					borderRadius="lg"
					mb={4}
					w="full"
					h="180px"
					objectFit="cover"
					transition="transform 0.3s ease"
				/>
			</a>

			{/* Project Description */}
			<Text
				color="gray.300"
				fontSize="sm"
				textAlign="center"
				mb={4}
				noOfLines={3}
			>
				{props.description}
			</Text>

			{/* Technologies Used */}
			<Flex
				w="full"
				mt={3}
				justifyContent="center"
				flexWrap="wrap"
				gap={2}
			>
				{props.technologies.map((tech, index) => (
					<Badge
						key={index}
						colorScheme="purple"
						variant="subtle"
						px={2}
						py={1}
						borderRadius="md"
						fontSize="xs"
						fontWeight="medium"
					>
						{tech}
					</Badge>
				))}
			</Flex>
		</Flex>
	);
};

export default ProjectCard;
