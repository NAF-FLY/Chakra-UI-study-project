import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function Dashboard() {
	const boxStyles = {
		p: '10px',
		bg: 'purple.400',
		color: 'white',
		m: '10px',
		textAlign: 'center',
		filter: 'blur(2px)',
		':hover': {
			color: 'black',
			bg: 'blue.200',
		},
	}

	return (
		<Container as='section' maxWidth='4xl' py={20}>
			<Heading my='30px' p='10px'>
				Chakra UI Components
			</Heading>
			<Text marginLeft='30px'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
			</Text>
			<Text ml='30px' color='blue.300' fontWeight='bold'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
			</Text>

			<Box my={30} p={30} bg='orange'>
				<Text color='white'>This is a book</Text>
			</Box>

			<Box sx={boxStyles}>Hello, Vadim!</Box>
		</Container>
	)
}
