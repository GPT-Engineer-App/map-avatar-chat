import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { FaBars, FaCommentDots, FaMapMarkedAlt, FaUserCircle } from "react-icons/fa";
import { useRef } from "react";

const Index = () => {
  const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure();
  const { isOpen: isChatOpen, onOpen: onChatOpen, onClose: onChatClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box>
      {/* Navbar */}
      <Flex justifyContent="space-between" p="4" bg="gray.100" alignItems="center">
        <IconButton icon={<FaBars />} onClick={onSidebarOpen} ref={btnRef} />
        <IconButton icon={<FaMapMarkedAlt />} />
        <IconButton icon={<FaCommentDots />} onClick={onChatOpen} />
      </Flex>

      {/* Sidebar Drawer */}
      <Drawer isOpen={isSidebarOpen} placement="left" onClose={onSidebarClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sidebar</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4">
              <Button w="full">Link 1</Button>
              <Button w="full">Link 2</Button>
              <Button w="full">Link 3</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Chat Drawer */}
      <Drawer isOpen={isChatOpen} placement="right" onClose={onChatClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chat</DrawerHeader>
          <DrawerBody>{/* Chat content goes here */}</DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content Area - Map Placeholder */}
      <Flex justifyContent="center" alignItems="center" height="calc(100vh - 64px)" bg="gray.200">
        <Box position="relative" width="full" height="full" overflow="auto">
          {/* Placeholder for map */}
          <Box width="1000px" height="1000px" bg="white" position="relative">
            {/* User Avatars */}
            <IconButton icon={<FaUserCircle />} position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" onClick={onChatOpen} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
