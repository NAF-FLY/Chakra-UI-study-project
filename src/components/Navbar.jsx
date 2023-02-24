import { UnlockIcon } from '@chakra-ui/icons'
import {
	Avatar,
	AvatarBadge,
	Button,
	Flex,
	Heading,
	HStack,
	Spacer,
	Text,
	useToast,
} from '@chakra-ui/react'

const Navbar = () => {
	const toast = useToast()

	const showToast = () => {
		toast({
			title: 'Logged out',
			description: 'Successfully logged out',
			duration: 5000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <UnlockIcon />,
		})
	}

	return (
		<Flex as='nav' p='10px' mb='40px' alignItems='center'>
			<Heading as='h1'>Dojo Tasks</Heading>
			<Spacer />

			<HStack spacing='20px'>
				<Avatar name='mario' bg='gray.400' src='/img/mario.png'>
					<AvatarBadge w='1.3em' bg='teal.500'>
						<Text fontSize='xs' color='white'>
							3
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>vpatsyuk@outlook.com</Text>
				<Button colorScheme='purple' onClick={showToast}>
					Logout
				</Button>
			</HStack>
		</Flex>
	)
}

export default Navbar
