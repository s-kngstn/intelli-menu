import {
  Heading,
  Box,
  Stack,
  Icon,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import NextLink from "next/link";
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
      marginRight="1rem"
      border="2px"
      borderColor="blackAlpha.700"
    >
      <LinkBox>
        <NextLink href="/dashboard/add-restaurant" passHref>
          <LinkOverlay>
            <Box
              h="120px"
              w="full"
              borderBottom="2px"
              borderColor="blackAlpha.700"
            />
            <Box p={6}>
              <Stack spacing={0} align="center" mb={5}>
                <Heading
                  textDecoration="none"
                  fontSize="2xl"
                  fontWeight={500}
                  fontFamily="body"
                >
                  Add Restaurant
                </Heading>
              </Stack>
              <Stack spacing={0} align="center" paddingTop={8} mb={5}>
                <Icon as={FiPlus} w={10} h={10} />
              </Stack>
            </Box>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Box>
  );
};

export default AddRestaurant;
