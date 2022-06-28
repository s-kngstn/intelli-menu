import type { NextPage } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Key } from "react";
import prisma from "../../../lib/prisma";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";
import TableRow from "../../../src/components/table-row/tableRow";
import { useUser } from "../../../lib/hooks";

const Menus: NextPage = ({ menus, restaurant }) => {
  const { user } = useUser();
  const restaurantDetails = restaurant[0];
  
  return (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex py={2} justifyContent="space-between" justifyItems="end">
          <Box>
            <Heading as="h4" size="md">
              {restaurantDetails.name}
            </Heading>
            {/* add street name to address db */}
            {/* <p>212 Midway Rd</p> */}
            <p>{restaurantDetails.address}</p>
          </Box>
          <p>+ Delete restaurant</p>
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
              {menus.map(
                (menu: { menuId: Key | null | undefined }, i: number) => {
                  return <TableRow key={menu.menuId} id={i + 1} menu={menu} />;
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
  const menus = await prisma.menu.findMany({
    where: {
      restaurantId: Number(id),
    },
  });
  const restaurant = await prisma.restaurant.findMany({
    where: {
      id: Number(id),
    },
  });
  return {
    props: { menus, restaurant },
  };
};

export default Menus;
