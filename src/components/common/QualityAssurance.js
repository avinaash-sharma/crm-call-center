import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Image,
  Text,
} from '@chakra-ui/react';

const QualityAssurance = () => {
  const [size, setSize] = React.useState('xl');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = newSize => {
    setSize('xl');
    onOpen();
  };
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="full"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box w={'full'} p={{ base: 1, md: 2 }}>
          <chakra.h2
            fontSize="lg"
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}
          >
            Automated Quality Assurance 
          </chakra.h2>
          <Box bg="orange.400">
            <Flex
              alignItems="center"
              justify={'space-between'}
              px={6}
              py={3}
              bg="orange.400"
            >
              <Image
                w={10}
                h={10}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                borderWidth={2}
                borderColor={useColorModeValue('white')}
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
              <chakra.h1
                fontSize="md"
                fontWeight="bold"
                color={useColorModeValue('white')}
              >
                John Doe
              </chakra.h1>
              <chakra.h1
                fontSize="xs"
                fontWeight="regular"
                color={useColorModeValue('white')}
              >
                100%
              </chakra.h1>
            </Flex>
          </Box>

          <Flex justify={'space-between'} px={1} py={3}>
            <chakra.h1
              fontSize="xs"
              fontWeight="bold"
              color={useColorModeValue('black', 'white')}
            >
              10:43:31 AM
            </chakra.h1>
            <chakra.h1
              fontSize="xs"
              fontWeight="bold"
              color={useColorModeValue('black', 'white')}
            >
              GMT-05:00) Eastern Time (US& Canada)
            </chakra.h1>
          </Flex>
          
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
            <Flex px={1} direction={"row"} justifyContent={"space-between"}>
                <Text fontSize='xs'>Call Opening</Text>
                <Box w="40%" h="2" bg="orange.400"></Box>
                <Text fontSize='xs'>100%</Text>

            </Flex>
         
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
      </Flex>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{`drawer contents`}</DrawerHeader>
          <DrawerBody>
            <h2>More details here.</h2>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default QualityAssurance;
