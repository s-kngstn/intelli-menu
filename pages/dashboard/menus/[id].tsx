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
  LinkBox,
  Link,
  LinkOverlay,
} from "@chakra-ui/react";
import { Key } from "react";
import jwt from "jsonwebtoken";
import { prisma } from "../../../lib/prisma";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";
import TableRow from "../../../src/components/table-row/menuRow";
import { useUser } from "../../../lib/hooks";

const Menus: NextPage = ({ menus, restaurant }) => {
  const { user } = useUser();
  const restaurantDetails = restaurant[0];
  console.log(restaurantDetails)

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
          <LinkBox>
            <Link href={`/dashboard/menus/add/${restaurantDetails.id}`}>
              <LinkOverlay>+ Add Menu</LinkOverlay>
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
                <Th>QR</Th>
              </Tr>
            </Thead>
            <Tbody>
              {menus.map(
                (menu: { menuId: Key | null | undefined }, i: number) => {
                  return (
                    <TableRow key={menu.menuId} tableId={i + 1} data={menu} />
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
