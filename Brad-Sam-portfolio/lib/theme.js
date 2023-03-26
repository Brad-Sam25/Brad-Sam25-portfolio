import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/300.css";


const styles = {
    global: {
        // styles for the `body`
        body: {
          bg: '#202023',
          fontFamily: `'Montserrat', sans-serif`,
          color: 'white',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
        h2: {
          padding: '30px 0 8px',
          position: 'relative',
          '&::before': {
            content:'""',
            position:'absolute',
            left: '7%',
            bottom:'16px',
            width: '150px',
            height:'14px',
            transform:'skew(12deg) translateX(-50%)',
            background: 'rgba(103, 98, 166)',
            zIndex: -1
          }
        },
        h1: {
          padding: '2rem',
          position: 'relative',
          '&::before': {
            content:'""',
            position:'absolute',
            left: '7%',
            bottom:'5px',
            width: '250px',
            height:'20px',
            transform:'skew(12deg) translateX(-20%)',
            background: 'rgba(103, 98, 166)',
            zIndex: -1
          }
        }        
      },
}


const theme = extendTheme({ styles });
export default theme;

