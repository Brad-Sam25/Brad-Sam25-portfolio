import React from 'react';
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const Home = () => {
	return (
		<Container as="section" maxW="4xl">
			<Container as='div' p="100px 0px">
				<Text pb="10px" >Hi, my name is </Text>
				<Heading as="h1" pb="10px" size="4xl">
					Brad Samuel.
				</Heading>
				<Text pb="10px">I love making things on the web</Text>
				<Text pb="10px">
					As a professional web developer, I possess a passion for crafting
					innovative and intuitive web experiences that effectively contribute to
					the overall improvement of patient health outcomes while simultaneously
					driving future funding success. I am committed to delivering exceptional
					quality and ensuring that the end product not only meets but surpasses
					the expectations of all stakeholders involved.
				</Text>
			</Container>

			<Container as='div' p="100px 0px">
				<Grid
					templateAreas={`"title title"
					"content image"`}
					gridTemplateRows={'50px 1fr 30px'}
					gridTemplateColumns={'350px 1fr'}
					h="200px"
					gap="1"
				>
					<GridItem pl="2" area={'title'}>
						<Heading as="h2" pb="10px" size="xl">
							About Me
						</Heading>
					</GridItem>
					<GridItem pl="2" pt="30px" area={'content'}>
						<Text pb="10px">
							Prior to my career change into the tech sphere &#40;web and software development&#41;, I worked in law firm as a legal assistant with aspirations of eventually becoming a real estate or patent attorney. Our particular firm used a closing software named Qualia and after close contact and numerous requests for new features with their team, I found myself gravitating more towards the technological side of our process.
						</Text>
						<Text>
							Subsequently, I came to a relaization that I was in the wrong occupational field and made the decision to pursue my true aspiration which is front-end and back-end development!
						</Text>
					</GridItem>
					<GridItem pl="2" area={'image'}>
						Image
					</GridItem>
				</Grid>
			</Container>

			<Container as='div' p="300px 0px">
				<Heading as="h2" pb="10px" size="xl">
					Hobbies
				</Heading>
				<Text pb="10px">
					As a professional web developer, I possess a passion for crafting
					innovative and intuitive web experiences that effectively contribute to
					the overall improvement of patient health outcomes while simultaneously
					driving future funding success. I am committed to delivering exceptional
					quality and ensuring that the end product not only meets but surpasses
					the expectations of all stakeholders involved.
				</Text>
			</Container>
		</Container>
	);
};

export default Home;
