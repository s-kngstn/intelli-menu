import { Heading, Box, Stack, Icon } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const AddRestaurant = () => {
  return (
    <Box
      maxW="270px"
      w="full"
      bg="white"
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      marginTop="2rem"
      marginRight="2rem"
      border="2px"
      borderColor="blackAlpha.700"
    >
      <Box h="120px" w="full" borderBottom="2px" borderColor="blackAlpha.700" />
      <Box p={6}>
        <Stack spacing={0} align="center" mb={5}>
          <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
            Add Restaurant
          </Heading>
        </Stack>
        <Stack spacing={0} align="center" paddingTop={8} mb={5}>
          <Icon as={FiPlus} w={10} h={10} />
        </Stack>
      </Box>
    </Box>
  );
};

export default AddRestaurant;
