import { Icon, Td, Tr } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TableRow = () => {
  return (
    <Tr>
      <Td>1</Td>
      <Td>Thursday Lunch</Td>
      <Td>6 Days Ago</Td>
      <Td>
        <Icon as={FaRegFolderOpen} w={6} h={6} color="green.500" />
      </Td>
      <Td>
        <Icon as={FiEdit} w={6} h={6} color="blue.500" />
      </Td>
      <Td>
        <Icon as={RiDeleteBin6Line} w={6} h={6} color="red.500" />
      </Td>
    </Tr>
  );
};

export default TableRow;
