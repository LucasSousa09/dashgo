import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

import NextLink from 'next/link'

import { Link, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'
import { Box, Flex, Icon ,Table, Thead ,Heading, Button, Tr, Th, Checkbox, Tbody, Td } from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useUsers } from '../../services/hooks/useUsers'
import { useState } from 'react'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'


export default function UserList(){

    
    const [page, setPage] = useState(1)

    //React-query = Salva os dados em cache para que a aplicação não precise ficar acessando o backend tão frequentemente
    const {data, isLoading, isFetching, error} = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function getUserData(userId: string) {
        const response = await api.get(`users/${userId}`)

        return response.data
    }

    async function handlePrefetchUser(userId: string){
        await queryClient.prefetchQuery(['user', userId], () =>  getUserData(userId), {staleTime: 1000 * 60 * 10 })
    }

    return (
        <Box>
            <Header/>
            <Flex w="100%" my='6' maxWidth='1400px' mx='auto' px="6"> 
                <Sidebar />

                <Box flex='1' borderRadius='0px' bg="gray.800" p="8"> 
                    <Flex mb='8' justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {
                                !isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4'/>
                            }    
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button
                                as='a'
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon fontSize="20" as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>                        
                        </NextLink>
                    </Flex>

                    {
                        isLoading 
                        ?
                            <Flex justify='center'>
                                <Spinner />
                            </Flex>  
                            : 
                                error 
                                ?
                                    (
                                        <Flex justify='center'>
                                            <Text>Falha ao obter dados dos usuários</Text>
                                        </Flex>
                                    )
                                    :
                                        (
                                            <>
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
                                                        {
                                                            data?.users.map(user => {
                                                                return (
                                                                    <Tr key={user.id}>
                                                                        <Td px={["4","4","6"]}>
                                                                            <Checkbox colorScheme="pink"/>
                                                                        </Td>
                                                                        <Td>
                                                                            <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                                                <Text fontWeight="bold"> {user.name} </Text>
                                                                            </Link>
                                                                            <Text fontSize="sm" color="gray.300"> {user.email} </Text>
                                                                        </Td>
                                                                        {isWideVersion && <Td>{user.created_at}</Td>}
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
                                                                )
                                                            })
                                                        }
                                                    </Tbody>
                                                </Table>

                                                <Pagination 
                                                    totalCountOfRegisters={data?.totalCount || 0}
                                                    currentPage={page}
                                                    onPageChange={setPage}
                                                />
                                            </>
                                        )
                    }
                </Box>
            </Flex>
        </Box>
    )
}