import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const RouteLayout = () => {
  return (
    <>
    <NavBar />
      <Box pb={8}>
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  )
}

export default RouteLayout