import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
  VStack,
} from "@chakra-ui/layout";
import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  Text,
  IconButton,
  MenuButton,
  Avatar,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  user: any;
}
const MobileNav = ({ user, onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      position="fixed"
      sx={{ zIndex: 999999 }}
      width="-webkit-fill-available"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <LinkBox>
        <Link href="/">
          <LinkOverlay>
            <Text
              display={{ base: "flex", md: "none" }}
              fontWeight="bold"
              fontSize="3xl"
              fontFamily="var(--chakra-fonts-heading)"
              bgGradient="linear(to-b, #76E4F7, #065666)"
              bgClip="text"
            >
              Intellimenu.
            </Text>
          </LinkOverlay>
        </Link>
      </LinkBox>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size="sm"
                  bg="#065666"
                  // src="https://samkingston.xyz/static/media/me2.684d4a8f.jpg"
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{`${user?.firstName} ${user?.lastName}`}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
