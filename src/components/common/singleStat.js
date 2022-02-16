import { Flex, Progress, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const SingleStat = (props) => {
  return (
    <Flex justifyContent={'space-between'} direction={'column'}>
            <Text
              fontWeight="regular"
              fontSize={'xs'}
              color={useColorModeValue('gray.600', 'white')}
            >
              call start
            </Text>
            <Progress value={props.values} size="xs" colorScheme="orange" />
          </Flex>
  )
}

export default SingleStat