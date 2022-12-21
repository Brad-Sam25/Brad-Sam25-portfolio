import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        // styles for the `body`
        body: {
          bg: '#555859',
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

