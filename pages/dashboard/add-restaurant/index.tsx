import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useUser } from "../../../lib/hooks";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";

const AddRestaurant: NextPage = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <SidebarWithHeader user={user}>
      <Flex minH="95vh" align="center" justify="center" bg="gray.100">
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading
              fontWeight="bold"
              fontSize="4xl"
              fontFamily="var(--chakra-fonts-heading)"
              color="blackAlpha.800"
            >
              Add Restaurant
            </Heading>
          </Stack>
          <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
            <form>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <InputGroup>
                    <Input
                      type="text"
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    // isLoading={isLoading}
                    bg="#065666"
                    color="white"
                    _hover={{
                      opacity: 0.7,
                    }}
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                  >
                    +
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </SidebarWithHeader>
  );
};

export default AddRestaurant;
