import type { NextPage } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";
import TableRow from "../../../src/components/table-row/tableRow";

const Menus: NextPage = () => {
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem">
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
              {/* // Data will flow through each table row using Map */}
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </SidebarWithHeader>
  );
};

export default Menus;
