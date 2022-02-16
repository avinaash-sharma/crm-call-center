import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBell, FaClipboardCheck, FaRss } from 'react-icons/fa';
import { AiFillGift } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FiMenu, FiSearch } from 'react-icons/fi';
import {  HiCollection } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';
import './navbar.css';
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from 'react-floating-action-button';
import { MdCall } from 'react-icons/md';

import Draggable from 'react-draggable';
import React, { useState } from 'react';
import Logo from '../images/Logo.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import CallScreen from '../screens/CallScreen';
import UserCard from './UserCard';

export default function NavBar() {
  const sidebar = useDisclosure();
  const [showCallScreen, setShowCallScreen] = useState(false);

  const [activeDrags, setActiveDrags] = useState(0);

  const onStart = () => {
    let temp = activeDrags + 1;
    setActiveDrags(temp);
  };

  const onStop = () => {
    let temp = activeDrags - 1;
    setActiveDrags(temp);
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };
  const NavItem = props => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('orange.200', 'orange.900'),
          color: useColorModeValue('gray.900', 'gray.200'),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={
              {
                // color: useColorModeValue("gray.600", "gray.300")
              }
            }
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = props => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="20"
      {...props}
    >
      <Flex px="3" py="3" align="center">
        <Image mx="auto" h="10" mb={{ base: '0', md: '0 ' }} src={Logo} />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="lg"
        color="gray.700"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}></NavItem>
        <NavItem icon={FaRss}></NavItem>
        <NavItem icon={HiCollection}></NavItem>
        <NavItem icon={FaClipboardCheck}></NavItem>

        <NavItem icon={AiFillGift}></NavItem>
        <NavItem icon={BsGearFill}></NavItem>
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 20 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
            <InputLeftElement color="gray.500" children={<FiSearch />} />
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex align="center">
            <ColorModeSwitcher justifySelf="flex-end" />
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Box as="main" p="2" w={"full"}>
          <React.StrictMode>
            {showCallScreen && (
              <Draggable {...dragHandlers}>
                <div
                  className="box"
                  style={{
                    cursor: 'move',
                    position: 'absolute',
                    // bottom: '320px',
                    top: '120px',
                    // right: '200px',
                    left: '200px',
                    zIndex: 100000,
                  }}
                >
                  <UserCard key={Math.random()} />
                </div>
              </Draggable>
            )}
            {true && (
              <Container className="fabContainer">
                <Button
                  color="orange"
                  styles={{
                    backgroundColor: darkColors.orange,
                    color: lightColors.white,
                  }}
                  tooltip="Call Assistant"
                  // rotate={true}
                  onClick={() => {
                    setShowCallScreen(!showCallScreen);
                    //   this.checkOut();
                  }}
                >
                  <span>
                    <MdCall />
                  </span>
                </Button>
              </Container>
            )}
            
          </React.StrictMode>
          <CallScreen />
        </Box>
      </Box>
    </Box>
  );
}
