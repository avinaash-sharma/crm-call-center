import React from 'react';
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  LightMode,
  
  Text,
  
} from '@chakra-ui/react';

const GraphCard = props => {
  const { button, data, ...rest } = props;
//   const { name, description, price, amountSaved, duration, benefits } = data;
//   const isFree = price == 0;
  return (
    <Flex
      direction="column"
      px="6"
      py="8"
      rounded="lg"
      pos="relative"
      maxW="md"
      mx="auto"
      {...rest}
    >
      <Box flex="1">
        <Text fontSize="2xl" lineHeight="1" fontWeight="bold">
          Constentual Insight
        </Text>
        <Flex align="center" justify={"space-between"} fontWeight="extrabold" mt="4" mb="3">
          <Text fontWeight={'regular'} fontSize={'xs'}>Insight One</Text>
          <CircularProgress value={90} color="orange.400">
            <CircularProgressLabel color={'gray.600'}>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex align="center" justify={"space-between"} fontWeight="extrabold" mt="4" mb="3">
          <Text fontWeight={'regular'} fontSize={'xs'}>Insight One</Text>
          <CircularProgress value={90} color="orange.400">
            <CircularProgressLabel color={'gray.600'}>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex align="center" justify={"space-between"} fontWeight="extrabold" mt="4" mb="3">
          <Text fontWeight={'regular'} fontSize={'xs'}>Insight One</Text>
          <CircularProgress value={90} color="orange.400">
            <CircularProgressLabel color={'gray.600'}>90%</CircularProgressLabel>
          </CircularProgress>
        </Flex>

        <Box mt="6"></Box>
      </Box>
      <Box mt="10">
        <LightMode>{button}</LightMode>
      </Box>
    </Flex>
  );
};

export default GraphCard;
