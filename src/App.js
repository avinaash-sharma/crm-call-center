import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import customTheme from './theme';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/screens/Login';
import WelcomeScreen from './components/screens/WelcomeScreen';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/welcome" element={<WelcomeScreen />} />
    </Routes>
      
      
    </ChakraProvider>
  );
}

export default App;
