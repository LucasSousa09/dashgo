import { Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from 'react-icons/ri'


export function SidebarNav(){
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='GERAL'>
                <NavLink href="/dashboard" label="DashBoard" icon={RiDashboardLine} />
                <NavLink href="/users"label="Usuários" icon={RiContactsLine} />
            </NavSection>
            <NavSection title='AUTOMAÇÃO'>
                <NavLink href="/forms"label="Formulários" icon={RiInputMethodLine} />
                <NavLink href="/automation"label="Automação" icon={RiGitMergeLine} /> 
            </NavSection>
        </Stack>
    )
}