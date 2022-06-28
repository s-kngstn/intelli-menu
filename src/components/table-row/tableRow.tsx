import { Icon, Td, Tr } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { timeSince } from "../../../lib/timeSince";

const TableRow = ({ menu, id }) => {
  const { name, createdAt } = menu;

  return (
    <Tr>
      <Td>{id}</Td>
      <Td fontWeight="bold">{name}</Td>
      <Td>{timeSince(new Date(createdAt))}</Td>
      <Td>
        <Icon as={FaRegFolderOpen} w={6} h={6} color="#065666" />
      </Td>
      <Td>
        <Icon as={FiEdit} w={6} h={6} color="#065666" />
      </Td>
      <Td>
        <Icon as={RiDeleteBin6Line} w={6} h={6} color="#065666" />
      </Td>
    </Tr>
  );
};

export default TableRow;
