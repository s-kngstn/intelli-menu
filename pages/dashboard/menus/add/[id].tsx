import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../../../../lib/hooks";
import SidebarWithHeader from "../../../../src/components/nav-sidebar/sidebarWithNav";

const AddMenuForm: NextPage = ({ host, id }) => {
  const { user } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  // console.log(user)

  const create = async (newMenu) => {
    const { data } = await axios.post(`http://${host}/api/menu/add`, newMenu);

    return data;
  };

  const restaurantID = Number(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createMenu = {
      name,
      id: restaurantID,
    };

    try {
      await create(createMenu);
      router.push(`/dashboard/menus/${restaurantID}`);
    } catch (error) {
      console.log(error);
    }
  };

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
              Add Menu
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
                  />
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

export const getServerSideProps = async (context) => {
  const { host } = context.req.headers;
  const { id } = context.query;
  console.log(context);

  return {
    props: { host, id },
  };
};

export default AddMenuForm;
