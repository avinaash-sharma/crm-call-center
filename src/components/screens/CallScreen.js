import {
  Box,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import Entities from '../common/Entities';
import { Member } from '../common/Member';
import { members } from '../common/_data';

const CallScreen = () => (
  <Box as="section" bg={useColorModeValue('gray.50', 'gray.800')}>
    <Box
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      py={{
        base: '12',
        md: '10',
      }}
    >
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '24rem 1fr',
        }}
        gap={{
          base: '8',
          md: '12',
          lg: '16',
        }}
      >
        <Box>
          <Entities />
        </Box>
        <SimpleGrid
          mt={{
            base: '8',
            md: '0',
          }}
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          {members.map((member, index) => (
            <Member
              key={index}
              cardName={member.cardName}
              time={member.time}
              image={member.image}
              name={member.name}
              timeLine = {member.timeLine}
              twitter="#"
              linkedIn="#"
            >
              {member.description}
            </Member>
          ))}
        </SimpleGrid>
      </Grid>
    </Box>
  </Box>
);
export default CallScreen;
