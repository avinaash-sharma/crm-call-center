import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ChatBubble = props => {
  const data = props.data;
  return (
    <div>
      {data.self ? (
        <Flex py={'4'} key={data.pId} justifyContent={'flex-start'}>
          <Box>
            <Flex direction={'column'} justifyContent={'flex-start'}>
              <Text fontSize="xs">{data.name}</Text>
              <Box py={2} px={3} bg={'orange.500'} borderRadius={'lg'}>
                {data.message}
              </Box>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Flex py={'4'} key={data.pId} justifyContent={'flex-end'}>
          <Box>
            <Flex direction={'column'} justifyContent={'flex-end'}>
              <Text fontSize="xs" bold>
                {data.name}
              </Text>
              <Box
                py={2}
                px={3}
                bg={'orange.500'}
                borderRadius={'lg'}
                fontSize={'xs'}
              >
                {data.message}
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default ChatBubble;
