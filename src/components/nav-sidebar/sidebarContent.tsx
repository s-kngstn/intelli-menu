import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import { FiHome, FiPlus, FiSettings } from "react-icons/fi";
import { VscSignOut } from "react-icons/vsc";
import { IconType } from "react-icons";
import Link from "next/link";
import NavItem from "./navItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, route: "/dashboard" },
  { name: "Add restaurant", icon: FiPlus, route: "/dashboard/add-restaurant" },
  // { name: "Add dish", icon: FiPlus, route: "/dashboard/menus" },
  { name: "Settings", icon: FiSettings, route: "/settings" },
  { name: "Sign out", icon: VscSignOut, route: "/" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="3xl"
          fontFamily="var(--chakra-fonts-heading)"
          fontWeight="bold"
          bgGradient="linear(to-l, #76E4F7, #065666)"
          bgClip="text"
        >
          Intellimenu.
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link key={link.route} href={link.route} passHref>
          <NavItem key={link.name} icon={link.icon} route={link.route}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};
export default SidebarContent;
