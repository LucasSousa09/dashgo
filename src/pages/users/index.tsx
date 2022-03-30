import { Box, Flex, Icon ,Table, Thead ,Heading, Button, Tr, Th, Checkbox, Tbody, Td } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'
import { useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'


export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header/>
            <Flex w="100%" my='6' maxWidth='1400px' mx='auto' px="6"> 
                <Sidebar />

                <Box flex='1' borderRadius='0px' bg="gray.800" p="8"> 
                    <Flex mb='8' justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as='a'
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon fontSize="20" as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>                        
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8"> 
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de Cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box fontWeight="bold"> Lucas Rodrigues</Box>
                                    <Box fontSize="sm" color="gray.300"> lucasrodriguessousa09@gmail.com </Box>
                                </Td>
                                {isWideVersion && <Td>28 de Março de 2022</Td>}
                                <Td>
                                    <Button
                                        as='a'
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="purple"
                                        leftIcon={<Icon fontSize='16' as={RiPencilLine} />}
                                        >
                                            { isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box fontWeight="bold"> Lucas Rodrigues</Box>
                                    <Box fontSize="sm" color="gray.300"> lucasrodriguessousa09@gmail.com </Box>
                                </Td>
                                {isWideVersion && <Td>28 de Março de 2022</Td>}
                                <Td>
                                    <Button
                                        as='a'
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="purple"
                                        leftIcon={<Icon fontSize='16' as={RiPencilLine} />}
                                        >
                                            { isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box fontWeight="bold"> Lucas Rodrigues</Box>
                                    <Box fontSize="sm" color="gray.300"> lucasrodriguessousa09@gmail.com </Box>
                                </Td>
                                {isWideVersion && <Td>28 de Março de 2022</Td>}
                                <Td>
                                    <Button
                                        as='a'
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="purple"
                                        leftIcon={<Icon fontSize='16' as={RiPencilLine} />}
                                        >
                                            { isWideVersion && 'Editar'}
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}