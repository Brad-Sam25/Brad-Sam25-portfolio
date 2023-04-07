import { Center, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { motion as m } from 'framer-motion';
import {
	cardContainerAnimation,
	cardItemAnimation,
	customVariants,
} from '../../../lib/animation';
import myProjects from '../../data/myProjects';

const Projects = () => {
	return (
		<Flex
			as={m.div}
			variants={customVariants}
			initial="hidden"
			animate="visible"
			alignItems="center"
			flexDir="column"
			mt="50px"
			mb="50px"
		>
			<Heading as="h1" size="2xl" mb="40px">
				Projects
			</Heading>
			<Wrap
				as={m.div}
				spacing="25px"
				mb="40px"
				variants={cardContainerAnimation}
				initial="hidden"
				animate="show"
			>
				{myProjects.map((project, index) => (			
					<WrapItem key={index} as={m.div} variants={cardItemAnimation}>
						<Center>
							<ProjectCard
								title={project.title}
								imageUrl={project.imageUrl}
								imageTitle={project.imageTitle}
								description={project.description}
								technologies={project.technologies}
							/>
						</Center>
					</WrapItem>
				))}
			</Wrap>
		</Flex>
	);
};

export default Projects;
