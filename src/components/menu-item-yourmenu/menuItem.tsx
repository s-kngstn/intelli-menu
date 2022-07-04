import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";

const MenuItem = ({ name, price, description }) => {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading color="#065666" size="sm">
            {name}
          </Heading>
        </Box>
        <Spacer />
        <Flex p="2">
          <Text fontWeight="bold" colorScheme="teal">
            £{price}
          </Text>
        </Flex>
      </Flex>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text size="md">{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuItem;
