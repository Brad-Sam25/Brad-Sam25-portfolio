import { Center, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { motion as m } from 'framer-motion';
import { cardContainerAnimation, cardItemAnimation } from '../../../lib/animation';

const Projects = () => {
	return (
		<Flex alignItems="center" flexDir="column" mt="50px" mb="50px">
			<Heading as="h1" size="2xl" mb="40px">
				Projects
			</Heading>
			<Wrap as={m.div} spacing="25px" mb="40px" variants={cardContainerAnimation} initial="hidden" animate="show" >
				<WrapItem as={m.div} variants={cardItemAnimation}>
					<Center>
						<ProjectCard
							title="Dewy"
							imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						/>
					</Center>
				</WrapItem>
				<WrapItem as={m.div} variants={cardItemAnimation}>
					<Center>
						<ProjectCard
							title="Dewy"
							imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						/>
					</Center>
				</WrapItem>
				<WrapItem as={m.div} variants={cardItemAnimation} >
					<Center>
						<ProjectCard
							title="Dewy"
							imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						/>
					</Center>
				</WrapItem>
			</Wrap>
		</Flex>
	);
};

export default Projects;
