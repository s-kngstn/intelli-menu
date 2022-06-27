import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
  LinkOverlay,
  Link,
  LinkBox,
} from "@chakra-ui/react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Box
      maxW="270px"
      w="full"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      marginTop="2rem"
      marginRight="1rem"
    >
      <Box
        h="120px"
        w="full"
        // bgGradient="linear(to-l, #76E4F7, #065666)"
        bg="#065666"
      />
      <Box p={6}>
        <Stack spacing={0} align="center" mb={5}>
          <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
            {restaurant.name}
          </Heading>
          <Text color="gray.500">{restaurant.address}</Text>
        </Stack>
        <LinkBox>
          <Link href={`/dashboard/menus/${restaurant.id}`}>
            <LinkOverlay>
              <Button
                w="full"
                mt={8}
                bg="#065666"
                color="white"
                rounded="md"
                _hover={{
                  boxShadow: "lg",
                  opacity: "0.7",
                }}
              >
                View
              </Button>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <Button
          w="full"
          mt={4}
          bg="red.500"
          color="white"
          rounded="md"
          _hover={{
            boxShadow: "lg",
            opacity: "0.7",
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
