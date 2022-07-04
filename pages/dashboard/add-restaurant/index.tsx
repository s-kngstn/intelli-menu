import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../../../lib/hooks";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";

const AddRestaurant: NextPage = ({ host }) => {
  const { user } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const createRestaurant = async (restaurant: {
    name: string;
    address: string;
    userId: any;
  }) => {
    const { data } = await axios.post(
      `https://${host}/api/restaurant/add`,
      restaurant
    );

    return data;
  };

  const userID = user.id;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const create = {
      name,
      address,
      id: userID,
    };
    try {
      await createRestaurant(create);
      router.push(`/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
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
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <InputGroup>
                    <Input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
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

export const getServerSideProps = async (context: {
  req: { headers: { host: any } };
}) => {
  const { host } = context.req.headers;
  return {
    props: { host },
  };
};

export default AddRestaurant;
