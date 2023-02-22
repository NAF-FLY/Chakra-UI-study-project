import {
	ChatIcon,
	CheckCircleIcon,
	EmailIcon,
	StarIcon,
	WarningIcon,
} from '@chakra-ui/icons'
import {
	List,
	ListIcon,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'

export default function Profile() {
	return (
		<Tabs mt='40px' p='20px' colorScheme='purple' variant='enclosed'>
			<TabList>
				<Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
				<Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={EmailIcon} />
							Email: mario@net.dev
						</ListItem>
						<ListItem>
							<ListIcon as={ChatIcon} />
							Email: mario@net.dev
						</ListItem>
						<ListItem>
							<ListIcon as={StarIcon} />
							Email: mario@net.dev
						</ListItem>
					</List>
				</TabPanel>

				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Loren upsen ...
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Loren upsen ...
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color='red.400' />
							Loren upsen ...
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color='teal.400' />
							Loren upsen ...
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color='red.400' />
							Loren upsen ...
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
