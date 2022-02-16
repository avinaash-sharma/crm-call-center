import {  chakra, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import GraphCard from './GraphCard';

const Entities = props => {
  // const { image, role, name, twitter, linkedIn, children } = props;
  return (
    <GraphCard
    bg={useColorModeValue('white', 'gray.700')}
      color={useColorModeValue('gray.800', 'white')}
      button={
        <chakra.button
            onClick={() => {
              // handleClick();
            }}
            w={'full'}
            px={2}
            py={1}
            bg="#fb4f0b"
            fontSize="xs"
            color="white"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: 'gray.200',
            }}
            _focus={{
              bg: 'gray.400',
            }}
          >
            View More Details
          </chakra.button>
      }
      
    />
  );
};
export default Entities;
