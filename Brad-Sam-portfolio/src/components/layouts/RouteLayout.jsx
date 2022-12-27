import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const RouteLayout = () => {
  return (
    <>
    <p>This is the root</p>
      <Box pb={8}>
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  )
}

export default RouteLayout