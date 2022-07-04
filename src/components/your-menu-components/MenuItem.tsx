import { Flex, Text } from "@chakra-ui/layout";

const MenuItem = ({ dishName, price, description }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">{dishName}</Text>
        <Text>{price}</Text>
      </Flex>
      <Text marginLeft="1rem">{description}</Text>
    </>
  );
};
export default MenuItem;
