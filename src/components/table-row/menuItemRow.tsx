import axios from "axios";
import { useRouter } from "next/router";
import { Icon, Link, LinkBox, LinkOverlay, Td, Tr } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { timeSince } from "../../../lib/timeSince";

const MenuItemRow = ({ data, tableId, prevPage, url }) => {
  const { name, createdAt, itemId, id } = data;
  const router = useRouter();

  const deleteItem = async (dishId: any) => {
    const response = await axios.delete(
      `https://${url}/api/menu-item/delete/${dishId}`
    );

    return response.data;
  };

  const handleDelete = async () => {
    await deleteItem(id);
    router.push(`/dashboard/menus/menu/${prevPage}`);
  };
  return (
    <Tr>
      <Td>{tableId}</Td>
      <Td fontWeight="bold">{name}</Td>
      <Td>{timeSince(new Date(createdAt))}</Td>
      <Td>
        <LinkBox>
          <Link href={`/dashboard/menus/menu/item/${itemId}`}>
            <LinkOverlay>
              <Icon as={FiEdit} w={6} h={6} color="#065666" />
            </LinkOverlay>
          </Link>
        </LinkBox>
      </Td>
      <Td>
        <Icon
          onClick={handleDelete}
          cursor="pointer"
          as={RiDeleteBin6Line}
          w={6}
          h={6}
          color="#065666"
        />
      </Td>
    </Tr>
  );
};

export default MenuItemRow;
