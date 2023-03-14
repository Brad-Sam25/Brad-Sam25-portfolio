import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading>{props.title}</Heading>
        </CardHeader>
        <CardBody>
        <Image
          objectFit='cover'
          src={props.imageUrl}
          alt={props.imageTitle}
        />          
        </CardBody>
        <CardFooter>
          <Link href='#'>          
            <Button colorScheme='teal'>View here</Button>
          </Link>
        </CardFooter>        
      </Card>
    </>
  )
}

export default ProjectCard