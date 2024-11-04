import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';
import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';
import myProjects from '../../data/myProjects';

const MotionBox = motion(Box);
const MotionGrid = motion(SimpleGrid);

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box bg="gray.900" minH="100vh" py={20}>
      <Container maxW="5xl" centerContent>
        <VStack spacing={16} align="center" w="full">
          {/* Header Section */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4} align="center" mb={12}>
              <Heading
                as="h1"
                size="3xl"
                bgGradient="linear(to-r, purple.400, purple.600)"
                bgClip="text"
                textAlign="center"
              >
                Featured Projects
              </Heading>
              <Text
                fontSize="xl"
                color="gray.300"
                maxW="3xl"
                textAlign="center"
                pb={8}
              >
                A collection of my work that showcases my skills and passion for web development
              </Text>
              {/* Centered Underline */}
            </VStack>
          </MotionBox>

          {/* Projects Grid */}
          <MotionGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="full"
            placeItems="center"
          >
            {myProjects.map((project, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <ProjectCard
                  title={project.title}
                  imageUrl={project.imageUrl}
                  imageTitle={project.imageTitle}
                  description={project.description}
                  technologies={project.technologies}
                  siteLink={project.siteLink}
                />
              </MotionBox>
            ))}
          </MotionGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
