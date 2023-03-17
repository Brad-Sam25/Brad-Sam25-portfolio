import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Link, Image, Stack, Text, Flex, DarkMode, Badge } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
      <Flex
        borderRadius='20px'
        bg='white'
        p='20px'
        height='445px'
        w={{ base: "315px", md: "345px"}}
        alignItems='center'
        direction='column'>
          <Flex w='100%' mb='18px'>
            <Text
            my='auto'
            color='black'
            fontWeight='600'
            textAlign='center'
            fontSize='xl'
            me='auto'>
            {props.title}
            </Text>
          </Flex>
          <Image
            src={props.imageUrl}
            alt={props.imageTitle}
            maxW='100%'
            borderRadius='20px'
            mb='10px'
          />
          <Text
            color='black'
            fontWeight='600'
            textAlign='start'
            fontSize='xl'
            w='100%'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, delectus!
          </Text>
          <Flex mt='auto' justify='space-between' w='100%' align='center'>
            <DarkMode>
              <Badge
                borderRadius='9px'
                size='md'
                colorScheme='green'
                color='green.400'
                textAlign='center'
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                Javascript
              </Badge>
            </DarkMode>
          </Flex>
      </Flex>
    </>
  )
}

export default ProjectCard