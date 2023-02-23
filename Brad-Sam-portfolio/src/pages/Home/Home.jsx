import React from 'react';
import {Container, Grid, GridItem, Heading, Text} from '@chakra-ui/react';

const Home = () => {
  return (
    <Container as='section' maxW='4xl'>
      <Text pb='10px'>Hi, my name is </Text>
      <Heading as='h1' pb='10px' size='4xl'>Brad Samuel.</Heading>
      <Text pb='10px'>I love making things on the web</Text>
      <Text pb='10px'>As a professional web developer, I possess a passion for crafting innovative and intuitive web experiences that effectively contribute to the overall improvement of patient health outcomes while simultaneously driving future funding success. I am committed to delivering exceptional quality and ensuring that the end product not only meets but surpasses the expectations of all stakeholders involved.</Text>

      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >
        <GridItem w='100%' h='10' bg='blue.500'>
        </GridItem>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Container>
  )
}

export default Home