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
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";
import TableRow from "../../../src/components/table-row/tableRow";
import { useUser } from "../../../lib/hooks";

const Menus: NextPage = () => {
  const { user } = useUser();
  return (
    <SidebarWithHeader user={user}>
      <Box marginTop="5rem">
        <Flex py={2} justifyContent="space-between" justifyItems="end">
          <Box>
            <Heading as="h4" size="md">
              Nandos
            </Heading>

            <p>212 Midway Rd</p>
            <p>London, UK</p>
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
