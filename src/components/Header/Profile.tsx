import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileText?: boolean
}

export function Profile({showProfileText = true}: ProfileProps ) {
    return (
        <Flex align='center'>
            {
                showProfileText &&
                    <Box mr='4' textAlign='right'>
                        <Text>Lucas Rodrigues</Text>
                        <Text color='gray.300' fontSize='small'>lucasrodrigues.sousa09@gmail.com</Text>
                    </Box>
            }
            <Avatar size='md' name='Lucas Rodrigues' src='https://github.com/lucassousa09.png'/>

        </Flex>
    )
}