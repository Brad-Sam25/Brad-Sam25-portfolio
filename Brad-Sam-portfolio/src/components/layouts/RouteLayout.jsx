import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const RouteLayout = () => {
  return (
    <>
      <Box as='main' pb={8}>
        <NavBar />
        <Container maxW="container.md" pt={14}>
           <Outlet />
        </Container>
      </Box>
    </>
  )
}

export default RouteLayout