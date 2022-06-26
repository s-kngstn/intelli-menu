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
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";

const Menus: NextPage = () => {
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem">
        <TableContainer>
          <Table variant="striped" colorScheme="facebook">
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
                <Td>Thursday Lunch</Td>
                <Td>6 Days Ago</Td>
                <Td>VIEW BUTTON</Td>
                <Td>EDIT BUTTON</Td>
                <Td>DELETE</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Sunday Roast</Td>
                <Td>11 Days Ago</Td>
                <Td>VIEW BUTTON</Td>
                <Td>EDIT BUTTON</Td>
                <Td>DELETE</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Christmas Luncheon</Td>
                <Td>22 Days Ago</Td>
                <Td>VIEW BUTTON</Td>
                <Td>EDIT BUTTON</Td>
                <Td>DELETE</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </SidebarWithHeader>
  );
};

export default Menus;
