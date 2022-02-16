import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    Stack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
import { useNavigate } from "react-router-dom";
  import { PasswordField } from './PasswordField'
  
  export const LoginForm = (props) => {
    const navigate = useNavigate();
    return (
    
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault()
        // your login logic here
        console.log("Clicked")
        navigate('/welcome')

      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <Button type="submit" color="whiteAlpha.900" bg="primary.900" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  )
  }