import {
  Box,
  Heading,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
// import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Card } from '../common/Card';
// import { DividerWithText } from '../common/DividerWithText';
// import { Link } from '../common/Link';
import { LoginForm } from '../common/LoginForm';
import Logo from '../images/Logo.png';

const Login = () => (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <ColorModeSwitcher justifySelf="flex-end" />
    <Box maxW="md" mx="auto">
      <Image mx="auto" h="20" mb={{ base: '3', md: '5' }} src={Logo} />
      <Heading
        textAlign="center"
        size="xl"
        mt="4"
        mb="8"
        fontWeight="extrabold"
      >
        Sign in to your account
      </Heading>

      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>
);
export default Login;
