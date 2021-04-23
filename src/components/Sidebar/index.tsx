import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react'
import {RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLinks } from './NavLinks';
import { NavSection } from './NavSection'

export function Sidebar() {
	return(
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" align="flex-start">
				<NavSection title="GERAL">
          <NavLinks icon={RiDashboardLine}>Dashboard</NavLinks>
          <NavLinks icon={RiContactsLine}>Usuários</NavLinks>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLinks icon={RiInputMethodLine}>Formulários</NavLinks>
          <NavLinks icon={RiGitMergeLine}>Automação</NavLinks>
        </NavSection>
			</Stack>
		</Box>
	);
}