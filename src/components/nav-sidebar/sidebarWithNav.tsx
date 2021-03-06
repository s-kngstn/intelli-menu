import React, { ReactNode } from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./sidebarContent";
import MobileNav from "./mobileNav";

const SidebarWithHeader = ({
  children,
  user,
}: {
  children: ReactNode;
  user: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav user={user} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" overflowY="scroll">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
