import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/300.css";

const styles = {
  global: {
    // Scrollbar styles
    '::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
      backgroundColor: '#202023',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: 'purple.400',
    },
    // Body styles
    body: {
      bg: '#202023',
      fontFamily: `'Montserrat', sans-serif`,
      color: 'white',
      maxWidth: '100%',
      overflowX: 'hidden',
    },
    // Link styles
    a: {
      color: 'purple.400',
      transition: 'all 0.3s ease',
      _hover: {
        color: 'purple.300',
        textDecoration: 'none',
        transform: 'translateY(-2px)',
      },
    },
    // Heading styles
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 'bold',
      width: '100%',
    },
    h1: {
      fontSize: { base: '2.5rem', md: '3.5rem' },
      lineHeight: '1.2',
      mb: '1rem',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '-10px',
        width: '80px',
        height: '4px',
        background: 'purple.400',
        borderRadius: 'full',
      },
    },
    h2: {
      fontSize: { base: '2rem', md: '2.5rem' },
      lineHeight: '1.3',
      mb: '0.5rem',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '-8px',
        width: '60px',
        height: '3px',
        background: 'purple.400',
        borderRadius: 'full',
      },
    },
  },
};

// Custom breakpoints to support wider layouts
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  '3xl': '1920px',
};

// Custom sizes for containers
const sizes = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },
};

// Custom component styles
const components = {
  Container: {
    baseStyle: {
      maxW: '100%',
      px: { base: '4', md: '6', lg: '8' },
      py: { base: '4', md: '6', lg: '8' },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 'bold',
    },
  },
  Text: {
    baseStyle: {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: 'tall',
    },
  },
  Link: {
    baseStyle: {
      transition: 'all 0.3s ease',
      _hover: {
        textDecoration: 'none',
        transform: 'translateY(-2px)',
      },
    },
  },
};

const theme = extendTheme({
  styles,
  breakpoints,
  sizes,
  components,
  colors: {
    purple: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;