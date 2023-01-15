import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/300.css";


const styles = {
    global: {
        // styles for the `body`
        body: {
          bg: '#555859',
          fontFamily: `'Montserrat', sans-serif`,
          color: 'white',
          height: 100,
          weight: 100
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
}


const theme = extendTheme({ styles });
export default theme;

