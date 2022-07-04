import {
  Box,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { NextPage } from "next";
import { Key } from "react";
import jwt from "jsonwebtoken";
import { useUser } from "../../../../lib/hooks";
import { prisma } from "../../../../lib/prisma";
import SidebarWithHeader from "../../../../src/components/nav-sidebar/sidebarWithNav";
import MenuItemRow from "../../../../src/components/table-row/menuItemRow";

const Menu: NextPage = ({ menuItems, menu, id }) => {
  const { user } = useUser();
  const menuDetails = menu[0];

  return menuItems.length === 0 ? (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex py={2} justifyContent="space-between" justifyItems="end">
          <Box>
            <Heading as="h4" size="md">
              {menuDetails.name}
            </Heading>
            <Text>Please add some items</Text>
          </Box>
          <LinkBox>
            <Link href={`/dashboard/menus/menu/add/${menuDetails.id}`}>
              <LinkOverlay>+ Add Dish</LinkOverlay>
            </Link>
          </LinkBox>
        </Flex>
        <TableContainer>
          <Table variant="striped" colorScheme="cyan">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Added</Th>
              </Tr>
            </Thead>
            <Tbody />
          </Table>
        </TableContainer>
      </Box>
    </SidebarWithHeader>
  ) : (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex py={2} justifyContent="space-between" justifyItems="end">
          <Box>
            <Heading as="h4" size="md">
              {menuDetails.name}
            </Heading>
          </Box>
          <LinkBox>
            <Link href={`/dashboard/menus/menu/add/${menuDetails.id}`}>
              <LinkOverlay>+ Add Dish</LinkOverlay>
            </Link>
          </LinkBox>
        </Flex>
        <TableContainer>
          <Table variant="striped" colorScheme="cyan">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Added</Th>
              </Tr>
            </Thead>
            <Tbody>
              {menuItems.map(
                (menuItem: { itemId: Key | null | undefined }, i: number) => {
                  return (
                    <MenuItemRow
                      key={menuItem.itemId}
                      tableId={i + 1}
                      data={menuItem}
                    />
                  );
                }
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </SidebarWithHeader>
  );
};

export const getServerSideProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  const token = context.req.cookies.INTELLI_ACCESS_TOKEN;

  if (!token) {
    let user;

    try {
      const { id } = jwt.verify(token, "hello");
      user = await prisma.user.findUnique({
        where: { id },
      });
      // If there is no match we throw the error not a real user
      if (!user) {
        throw new Error("Not real user");
      }
    } catch (e) {
      console.log(e);
      return {
        redirect: {
          permanent: false,
          destination: "/signin",
        },
      };
    }
  }
  const menuItems = await prisma.menuItems.findMany({
    where: {
      menuId: Number(id),
    },
    include: {
      menu: true,
    },
  });

  const menu = await prisma.menu.findMany({
    where: {
      id: Number(id),
    },
  });

  return {
    props: { menuItems, menu },
  };
};

export default Menu;
