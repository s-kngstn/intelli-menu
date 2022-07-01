import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { NextPage } from "next";
import { Key } from "react";
import { useUser } from "../../../../lib/hooks";
import { prisma } from "../../../../lib/prisma";
import SidebarWithHeader from "../../../../src/components/nav-sidebar/sidebarWithNav";
import MenuItemRow from "../../../../src/components/table-row/menuItemRow";

const Menu: NextPage = ({ menuItems }) => {
  const { user } = useUser();
  const menuDetails = menuItems[0].menu;

  return (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex py={2} justifyContent="space-between" justifyItems="end">
          <Box>
            <Heading as="h4" size="md">
              {menuDetails.name}
            </Heading>
          </Box>
          <p>+ Add dish</p>
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
  const menuItems = await prisma.menuItems.findMany({
    where: {
      menuId: Number(id),
    },
    include: {
      menu: true,
    },
  });

  return {
    props: { menuItems },
  };
};

export default Menu;
