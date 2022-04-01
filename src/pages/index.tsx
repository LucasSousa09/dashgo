import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

import type { NextPage } from 'next'

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória'),
  })

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

 const handleSignIn: SubmitHandler<FieldValues> = (values, event) => {
  console.log(values)
 }

  const { errors } = formState

  console.log(errors)

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input 
            type='email'
             label='E-mail'
              error={errors.email}
               {...register('email')}
               />
          <Input
            type='password'
             label='Senha'
              error={errors.password}
              {...register('password')} 
             />
        </Stack>

        <Button 
          type="submit" 
          mt='6' 
          colorScheme='pink'
          size='lg'
          // isLoading={formState.isSubmitting}
        >
           Entrar
        </Button>
      </Flex>
    </Flex>

  )
}

export default SignIn
