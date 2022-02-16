import {
  Box,
  Center,
  chakra,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Img,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Thead,
  Th,
} from '@chakra-ui/react';
import * as React from 'react';

import SingleStat from './singleStat';

export const Member = props => {
  const [size, setSize] = React.useState('xl');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = newSize => {
    setSize('xl');
    onOpen();
  };
  const { image, name, cardName } = props;
  return (
    <Flex
      direction="column"
      borderRadius={"md"}
      bg={useColorModeValue('white', 'gray.700')}
      shadow={useColorModeValue('base', 'none')}
    >
      <Box w={'full'} p={{ base: 2, md: 3 }}>
        <chakra.h2
          fontSize="md"
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'white')}
        >
          {cardName}
        </chakra.h2>

        {cardName === 'Automated Quality Assurance' && (
          <Box>
            <Box
              size={'sm'}
              h={'20'}
              width={'full'}
              bg={'gray.600'}
              borderRadius="lg"
              p={2}
            >
              <Flex justify={'space-between'} direction="row">
                <Center>
                  <Flex direction="row">
                    <Center>
                      <Img
                        float="left"
                        alt={name}
                        w="16"
                        h="16"
                        rounded="full"
                        objectFit="cover"
                        src={image}
                        zIndex="1"
                      />
                      <Box px={2}>
                        <Text fontWeight="bold" color={'white'}>
                          {name}
                        </Text>
                        <Text
                          fontWeight="regular"
                          fontSize={'xs'}
                          color={'white'}
                        >
                          {name}
                        </Text>
                      </Box>
                    </Center>
                  </Flex>
                </Center>
                <Center>
                  <CircularProgress value={90} color="orange.400">
                    <CircularProgressLabel color={'white'}>
                      90%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Center>
              </Flex>
            </Box>
            <SingleStat values="80" />
            <SingleStat values="34" />
            <SingleStat values="40" />
            <SingleStat values="70" />
          </Box>
        )}
        {cardName === 'Call Details' && (
          <Box>
            <Box
              size={'sm'}
              h={'20'}
              width={'full'}
              bg={'gray.600'}
              borderRadius="lg"
              p={2}
            >
              <Flex justify={'space-between'} direction="row">
                <Center>
                  <Flex direction="row">
                    <Center>
                      <Img
                        float="left"
                        alt={name}
                        w="16"
                        h="16"
                        rounded="full"
                        objectFit="cover"
                        src={image}
                        zIndex="1"
                      />
                      <Box px={6}>
                        <Text fontWeight="bold" color={'white'}>
                          {name}
                        </Text>
                        <Text
                          fontWeight="hairline"
                          fontSize={'xs'}
                          color={'white'}
                        >
                          {name}
                        </Text>
                      </Box>
                    </Center>
                  </Flex>
                </Center>
              </Flex>
            </Box>
            <Box p={1}>
              <Flex justify={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  10:44:44AM
                </Text>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  16.02.2022
                </Text>
              </Flex>
            </Box>
            <Box p={1}>
              <Flex justify={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  Call Length
                </Text>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  00:03:53
                </Text>
              </Flex>
            </Box>
            <Box p={1}>
              <Flex justify={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  Patch Length
                </Text>
                <Text fontWeight={'bold'} fontSize={'sm'}>
                  00:00:53
                </Text>
              </Flex>
            </Box>
          </Box>
        )}
        {cardName === 'Recent Dues' && (
          <Box>
            <Table size={'sm'} variant="striped" colorScheme="orange">
              <Tbody>
                <Tr>
                  <Td>Policy Nu.</Td>
                  <Td>POL69581</Td>
                </Tr>
                <Tr>
                  <Td>Policy Type</Td>
                  <Td>Bike</Td>
                </Tr>
                <Tr>
                  <Td>Current Stutus</Td>
                  <Td>Approved</Td>
                </Tr>
                <Tr>
                  <Td>Termination</Td>
                  <Td>2012-08-17</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        )}
        {cardName === 'Reason for call' && (
          <Box>
            <Table size={'sm'} variant="striped" colorScheme="orange">
              <Tbody>
                <Tr>
                  <Td>Reason One</Td>
                </Tr>
                <Tr>
                  <Td>Reason One</Td>
                </Tr>
                <Tr>
                  <Td>Reason One</Td>
                </Tr>
                <Tr>
                  <Td>Reason One Two and so on...</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        )}
        {cardName === 'Policy' && (
          <Box>
            <Table size={'sm'} variant="striped" colorScheme="orange">
            
            <Thead>
              <Tr>
                <Th fontSize={"xs"}>Policy No.</Th>
                <Th fontSize={"xs"}>Policy Type</Th>
                <Th fontSize={"xs"}>Product Name</Th>
              </Tr>
              
            </Thead>
              <Tbody>
                <Tr>
                  <Td>P0l6341</Td>
                  <Td>P0l6341</Td>
                  <Td>P0l6341</Td>
                </Tr>
                <Tr>
                  <Td>P0l6341</Td>
                  <Td>P0l6341</Td>
                  <Td>P0l6341</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        )}
        {cardName === 'Entity' && (
          <Box>
          <Table size={'sm'} variant="striped" colorScheme="orange">
            <Tbody>
              <Tr>
                <Td>First Name.</Td>
                <Td>John</Td>
              </Tr>
              <Tr>
                <Td>Last Name</Td>
                <Td>Smith</Td>
              </Tr>
              <Tr>
                <Td>DOB</Td>
                <Td>August 16, 1982</Td>
              </Tr>
              <Tr>
                <Td>Member ID</Td>
                <Td>123456</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        )}
        <Flex mt={3} alignItems="center" justifyContent="space-between">
          <chakra.button
            onClick={() => {
              handleClick();
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
        </Flex>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`drawer contents`}</DrawerHeader>
          <DrawerBody>
            <h2>More details here.</h2>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
