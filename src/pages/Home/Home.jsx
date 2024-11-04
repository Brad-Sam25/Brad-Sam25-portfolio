import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Link,
  VStack,
  HStack,
  Divider,
  Badge,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const SectionHeading = ({ children, ...props }) => (
    <VStack align="flex-start" spacing={2} width="100%" {...props}>
      <Heading size="lg" color="purple.400">
        {children}
      </Heading>
      <Box w="60px" h="3px" bg="purple.400" />
    </VStack>
  );

  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <Container maxW="7xl" py={20}>
        {/* Hero Section */}
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          mb={28}
          w="full"
        >
          <VStack align="flex-start" spacing={8} w="full">
            <Badge colorScheme="purple" fontSize="lg" px={6} py={2} borderRadius="full">
              Web Developer
            </Badge>
            <Heading 
              as="h1" 
              size="3xl" 
              bgGradient="linear(to-r, purple.400, purple.600)"
              bgClip="text"
            >
              Brad Samuel
            </Heading>
            <Text 
              fontSize="2xl" 
              color="gray.300"
              maxW="4xl"
              lineHeight="tall"
            >
              I'm a professional web developer passionate about crafting innovative and intuitive web experiences. My focus is on creating solutions that drive meaningful impact while maintaining exceptional quality.
            </Text>
          </VStack>
        </MotionBox>

        {/* About Section */}
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          my={28}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={16} alignItems="center">
            <Image
              src="../../images/Brad.jpg"
              borderRadius="xl"
              border="4px solid"
              borderColor="purple.500"
              w="full"
              maxW="400px"
              mx="auto"
              boxShadow="2xl"
            />
            <VStack align="flex-start" spacing={8}>
              <SectionHeading>About Me</SectionHeading>
              <Text color="gray.300" fontSize="xl" lineHeight="tall">
                My journey into tech began from an unexpected place - working as a legal assistant with aspirations of becoming a real estate or patent attorney. Through my experience with legal software like Qualia, I discovered my true passion lay in technology and development. This realization led me to pivot my career towards full-stack development, where I've found my calling in creating impactful web solutions.
              </Text>
            </VStack>
          </Grid>
        </MotionBox>

        {/* Hobbies Section */}
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          my={28}
        >
          <VStack align="flex-start" spacing={12} bg="whiteAlpha.50" p={12} borderRadius="xl">
            <SectionHeading>Beyond Code</SectionHeading>
            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={12} w="full">
              <Box p={8} bg="whiteAlpha.100" borderRadius="lg">
                <Heading size="md" mb={6} color="purple.300">Music Enthusiast</Heading>
                <Text color="gray.300" fontSize="lg">Currently vibing to Malcolm Todd, EEM TRIPPLIN, and Dance Gavin Dance.</Text>
              </Box>
              <Box p={8} bg="whiteAlpha.100" borderRadius="lg">
                <Heading size="md" mb={6} color="purple.300">Culinary Artist</Heading>
                <Text color="gray.300" fontSize="lg">World-renowned Cereal Chef, specializing in critically acclaimed Frosted Flakes.</Text>
              </Box>
              <Box p={8} bg="whiteAlpha.100" borderRadius="lg">
                <Heading size="md" mb={6} color="purple.300">Artist</Heading>
                <Text color="gray.300" fontSize="lg">Passionate about creating realistic drawings in my free time.</Text>
              </Box>
            </Grid>
          </VStack>
        </MotionBox>

        {/* Experience Section */}
        <MotionBox
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          my={28}
        >
          <SectionHeading mb={12}>Professional Journey</SectionHeading>
          <VStack spacing={16} align="stretch">
            <Box>
              <HStack justify="space-between" mb={6}>
                <VStack align="flex-start" spacing={2}>
                  <Link 
                    href="https://www.nemours.org/" 
                    isExternal 
                    color="purple.300" 
                    fontSize="2xl" 
                    fontWeight="bold"
                  >
                    Nemours
                  </Link>
                  <Text color="gray.300" fontSize="xl">Web Application Developer</Text>
                </VStack>
                <Badge colorScheme="purple" fontSize="lg" px={4} py={2}>Nov 2023 - Present</Badge>
              </HStack>
              <VStack align="flex-start" spacing={6} pl={6}>
                <HStack align="flex-start" spacing={6}>
                  <ArrowRightIcon color="purple.400" mt={2} boxSize={5} />
                  <Text color="gray.300" fontSize="lg">
                    Lead the development lifecycle of custom applications, overseeing design, development, maintenance, and support using Python (Django/Flask), PHP (Laravel), and Javascript (React/Vue).
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <HStack justify="space-between" mb={6}>
                <VStack align="flex-start" spacing={2}>
                  <Link 
                    href="https://www.nemours.org/" 
                    isExternal 
                    color="purple.300" 
                    fontSize="2xl" 
                    fontWeight="bold"
                  >
                    Nemours
                  </Link>
                  <Text color="gray.300" fontSize="xl">Web Application Developer 1</Text>
                </VStack>
                <Badge colorScheme="purple" fontSize="lg" px={4} py={2}>Feb 2022 - Feb 2024</Badge>
              </HStack>
              <VStack align="flex-start" spacing={6} pl={6}>
                <HStack align="flex-start" spacing={6}>
                  <ArrowRightIcon color="purple.400" mt={2} boxSize={5} />
                  <Text color="gray.300" fontSize="lg">
                    Developed and maintained 3 web applications using Vue, Laravel, and MySQL, focusing on improving patient health outcomes.
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={6}>
                  <ArrowRightIcon color="purple.400" mt={2} boxSize={5} />
                  <Text color="gray.300" fontSize="lg">
                    Spearheaded new API integrations for research document retrieval, significantly improving researcher access to critical records.
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Home;