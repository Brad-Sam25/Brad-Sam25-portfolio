import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

const RouteLayout = () => {
  return (
    <>
      <Box as='main' pb={8}>
        <NavBar />
        <Container pt={10}>
           <Outlet />
           <Footer />
        </Container>
      </Box>
    </>
  )
}

export default RouteLayout