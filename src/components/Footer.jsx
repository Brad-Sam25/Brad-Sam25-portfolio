import { Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      as="footer"
      w="full"
      py={6}
      textAlign="center"
      fontSize="sm"
      color="gray.400"
      opacity={0.8}
    >
      &copy; {new Date().getFullYear()} Brad Samuel. All Rights Reserved.
    </Box>
  );
};

export default Footer;
