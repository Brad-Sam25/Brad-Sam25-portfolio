import React from 'react';
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { customVariants } from '../../../lib/animation';
import { motion as m } from 'framer-motion';

const Home = () => {
	return (
		<Container as="section" maxW="4xl">
			<m.div
				variants={customVariants}
				initial="hidden"
				whileInView="visible"
				exit="hidden"
				viewport={{ once: true, threshold: 0.8 }}
				p="100px 0px"
			>
				<Container as="div" p="100px 0px">
					<Text fontSize="xl">Hi, my name is </Text>
					<Heading as="h1" pb="10px" size="4xl" m="0px">
						Brad Samuel.
					</Heading>
					<Heading
						as="h4"
						pb="10px"
						size="2xl"
						m="20px 0px 0px"
						color="#C0B9CC"
					>
						I love making things on the web
					</Heading>
					<Text pb="10px" fontSize="xl" m="20px 0px 0px">
						As a professional web developer, I possess a passion for crafting
						innovative and intuitive web experiences that effectively contribute
						to the overall improvement of patient health outcomes while
						simultaneously driving future funding success. I am committed to
						delivering exceptional quality and ensuring that the end product not
						only meets but surpasses the expectations of all stakeholders
						involved.
					</Text>
				</Container>
			</m.div>

			<Container as="div" p="100px 0px">
				<m.div
					variants={customVariants}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					viewport={{ once: true, threshold: 0.8 }}
					p="100px 0px"
				>
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
								Prior to my career change into the tech sphere &#40;web and
								software development&#41;, I worked in law firm as a legal
								assistant with aspirations of eventually becoming a real estate
								or patent attorney. Our particular firm used a closing software
								named Qualia and after close contact and numerous requests for
								new features with their team, I found myself gravitating more
								towards the technological side of our process.
							</Text>
							<Text>
								Subsequently, I came to a relaization that I was in the wrong
								occupational field and made the decision to pursue my true
								aspiration which is front-end and back-end development!
							</Text>
						</GridItem>
						<GridItem pl="2" area={'image'}>
							Image
						</GridItem>
					</Grid>
				</m.div>
			</Container>

			<Container as="div" p="300px 0px">
				<m.div
					variants={customVariants}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					viewport={{ once: true, threshold: 0.8 }}
				>
					<Heading as="h2" pb="10px" size="xl">
						Hobbies
					</Heading>
					<Text pb="10px">
						As a professional web developer, I possess a passion for crafting
						innovative and intuitive web experiences that effectively contribute
						to the overall improvement of patient health outcomes while
						simultaneously driving future funding success. I am committed to
						delivering exceptional quality and ensuring that the end product not
						only meets but surpasses the expectations of all stakeholders
						involved.
					</Text>
				</m.div>
			</Container>
		</Container>
	);
};

export default Home;
