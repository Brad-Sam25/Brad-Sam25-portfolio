import React from 'react';
import {
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
	Image,
	Link,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { customVariants } from '../../../lib/animation';
import { motion as m } from 'framer-motion';

const Home = () => {
	return (
		<Container as="section" maxW={{ base: "sm", md: "4xl"}}>
			<m.div
				variants={customVariants}
				initial="hidden"
				whileInView="visible"
				exit="hidden"
				viewport={{ once: true, threshold: 0.8 }}
				py={{ base: '50px', md: '100px' }}
			>
				<Container as="div" py={{ base: '50px', md: '100px' }}>
					<Text fontSize={{ base: 'sm', md:'2xl' }}>Hi, my name is </Text>
					<Heading as="h1" pb="10px" size={{ base: 'xl' , md:'4xl' }} m="0px">
						Brad Samuel.
					</Heading>
					<Heading
						as="h4"
						pb="10px"
						size={{ base: 'lg', md: '2xl' }}
						m={{ base: '10px', md:'20px' }}
						color="#C0B9CC"
					>
						I love making things on the web
					</Heading>
					<Text pb="10px" fontSize={{ base: 'lg', md: 'xl' }} m="20px 0px 0px">
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

			<Container as="div" p="200px 0px">
				<m.div
					variants={customVariants}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					viewport={{ once: true, threshold: 0.8 }}
					p="100px 0px"
				>
					<Grid
						templateColumns='repeat(2 1fr)'  templateRows='repeat(2 1fr)' gap="40px"
					>
						<GridItem pl="2" rowSpan={1}>
							<Heading as="h2" pb="10px" size="xl">
								About Me
							</Heading>
						</GridItem>
						<GridItem pl="2" colSpan={2}>
							<Image
								src="../../images/Brad.jpg"
								border="5px solid"
								mx="auto"
								borderColor="rgba(103, 98, 166)"
								width="208px"
								height="208px"
								mt="-30px"
								borderRadius="50%"
							/>
						</GridItem>
						<GridItem pl="2" pt="30px" colSpan={2}>
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
					</Grid>
				</m.div>
			</Container>

			<Container as="div" p="100px 0px">
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
					<Text pb="10px" pt="40px">
						When I am not learning or playing with new technologies, I am experiencing and appreciating all generes of music! At the moment, I have been loving the artist like Malcolm Todd, EEM TRIPPLIN, and Dance Gavin Dance.
					</Text>
					<Text pb="10px">
						I am also a wolrd renowned Cereal Chef with my frosted flakes being critically acclaimed!
					</Text>
					<Text pb="10px">
						Finally, I love to spend my free time drawing realistic photos.
					</Text>
				</m.div>
			</Container>

			<Container
				as={m.div}
				variants={customVariants}
				initial="hidden"
				whileInView="visible"
				exit="hidden"
				viewport={{ once: true, threshold: 0.8 }}
				mb="105px"
				mt='200px'
			>
				<Heading mb="20px">My Experience</Heading>
				<Grid templateColumns="auto 1fr" gap="40px">
					<GridItem>February 2022 - Present</GridItem>
					<GridItem>
						<Text fontWeight={900} color="rgba(103, 98, 166)" fontSize="25px">
							<Link href="https://www.nemours.org/" isExternal={true}>
								Nemours
							</Link>
						</Text>
						<Text fontWeight={600} mb="10px">
							Web Application Developer
						</Text>
						<Grid templateColumns="auto 1fr" gap="40px">
							<GridItem>
								<ArrowRightIcon color="rgba(103, 98, 166)" />
							</GridItem>
							<GridItem>
								<Text fontSize="13px" fontWeight={100}>
									Works within a close-knit software team to assist the hospital
									in the development of applications to improve patient health
									outcomes and ensure future funding success for researchers.
								</Text>
							</GridItem>
							<GridItem>
								<ArrowRightIcon color="rgba(103, 98, 166)" />
							</GridItem>
							<GridItem>
								<Text fontSize="13px" fontWeight={100}>
									Directly responsible for the full-stack development and
									maintenance of the company&#39;s 3 web applications, utilizing
									Vue, Laravel, and MySQL. Spearheaded the creation of new API
									integrations involving research document retrieval through our
									web application, greatly increasing the ease at which
									researchers can access important records.
								</Text>
							</GridItem>
							<GridItem>
								<ArrowRightIcon color="rgba(103, 98, 166)" />
							</GridItem>
							<GridItem>
								<Text fontSize="13px" fontWeight={100}>
									Spearheaded the creation of new API integrations involving
									research document retrieval through our web application,
									greatly increasing the ease at which researchers can access
									important records.
								</Text>
							</GridItem>
						</Grid>
					</GridItem>
				</Grid>
			</Container>
		</Container>
	);
};

export default Home;
