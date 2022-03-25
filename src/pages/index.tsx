import type { NextPage } from 'next'

import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

const SignIn: NextPage = () => {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center' 
      justify='center'
    >
      <Flex 
        as='form'
        w='100%'
        maxW='360px'
        bg='gray.800'
        p='8'
        borderRadius='8px'
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input name='email' type='e-mail' label='E-mail' />
          <Input name='password' type='password' label='Senha' />
        </Stack>

        <Button 
          type="submit" 
          mt='6' 
          colorScheme='pink'
          size='lg'
        > Entrar </Button>
      </Flex>
    </Flex>

  )
}

export default SignIn
