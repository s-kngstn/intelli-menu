import type { NextPage } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import NavBar from "../../src/components/navigation";

const Restaurants: NextPage = () => {
  return (
    <Box>
      <NavBar pageTitle="Your Restaurants" />
      <TableContainer>
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Added</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Table row made into its own data driven component? */}
            <Tr>
              <Td>1</Td>
              <Td>The Fox & Hound Pub</Td>
              <Td>69 Days Ago</Td>
              <Td>VIEW BUTTON</Td>
              <Td>EDIT BUTTON</Td>
              <Td>DELETE</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Restaurants;
