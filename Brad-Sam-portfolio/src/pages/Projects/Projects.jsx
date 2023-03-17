import { Box, Container, Flex, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../../components/ProjectCard'

const Projects = () => {
  return (
    <>
      <Container as="section" minHeight="100vh">
        <Container as='div' p="100px 0px 0px" centerContent>
          <Heading as="h1" size="2xl">
            Projects
          </Heading>
        </Container>
        <Flex flexDirection="row" p="100px 0px 0px">
          <Box m="20px">
            <ProjectCard title="Dewy" imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </Box>
          <Box m="20px">
            <ProjectCard title="Dewy" imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  />
          </Box>
          <Box m="20px">
            <ProjectCard title="Dewy" imageUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  />
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Projects