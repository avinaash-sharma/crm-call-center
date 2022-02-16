import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { Tooltip } from '@chakra-ui/react';
import { MdHeadset, MdCallEnd } from 'react-icons/md';
import { FiMinimize2, FiPhoneForwarded, FiPauseCircle } from 'react-icons/fi';
import { RiRecordCircleLine } from 'react-icons/ri';
import { BiNotepad } from 'react-icons/bi';
import { AiOutlineAudioMuted } from 'react-icons/ai';

import ChatData from './chatData.json';
import ChatBubble from './ChatBubble';
const UserCard = ( props ) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={2}
      w="full"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
    >
      <Box
        w="xs"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
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

            <button onClick={props.toggleToParent}>
              <Icon as={FiMinimize2} h={6} w={6} color="white"  />
            </button>
          </Flex>
        </Box>

        <Flex
          alignItems="center"
          justify={'space-between'}
          px={6}
          py={3}
          bg="orange.400"
        >
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            You are connected
          </chakra.h1>
          <Icon as={RiRecordCircleLine} h={6} w={6} color="white" />
        </Flex>

        <Box
          m={3}
          px={6}
          borderStyle="solid"
          borderWidth={2}
          borderColor={useColorModeValue('orange.500')}
          py={3}
          borderRadius={'md'}
        >
          <chakra.h1
            fontSize="md"
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}
          >
            Live Transcription
          </chakra.h1>

          <Box
            scrollBehavior={'inside'}
            overflowX={'auto'}
            h={250}
          >
            {ChatData.map((element, index) => {
              return <ChatBubble pId={index + element.name} data={element} />;
            })}
          </Box>
        </Box>
        <Flex
          alignItems="center"
          justify={'space-around'}
          px={6}
          py={3}
          bg="orange.700"
        >
          <Tooltip
            hasArrow
            label="Search places"
            bg="red.600"
            placement="bottom-end"
          >
            <button>
              <Icon as={BiNotepad} h={4} w={4} color="white" />
            </button>
          </Tooltip>
          <button>
            <Icon as={FiPhoneForwarded} h={4} w={4} color="white" />
          </button>
          <button>
            <Icon as={FiPauseCircle} h={4} w={4} color="white" />
          </button>
          <button>
            <Icon as={AiOutlineAudioMuted} h={4} w={4} color="white" />
          </button>
          <button>
            <Icon as={MdCallEnd} h={4} w={4} color="white" />
          </button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserCard;
