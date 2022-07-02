import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import jwt from "jsonwebtoken";
import { useUser } from "../../../../../lib/hooks";
import { prisma } from "../../../../../lib/prisma";
import SidebarWithHeader from "../../../../../src/components/nav-sidebar/sidebarWithNav";

const MenuItem: NextPage = ({ menuItem, host }) => {
  const item = menuItem[0];
  const { user } = useUser();
  const router = useRouter();
  const [name, setName] = useState(item.name);
  const [course, setCourse] = useState(item.course);
  const [description, setDescription] = useState(item.description);
  const [gluten, setGluten] = useState(item.gluten);
  const [dairy, setDairy] = useState(item.dairy);
  const [nuts, setNuts] = useState(item.nuts);
  const [peanuts, setPeanuts] = useState(item.peanuts);
  const [sesame, setSesame] = useState(item.sesame);
  const [soya, setSoya] = useState(item.soya);
  const [sulphites, setSulphites] = useState(item.sulphites);
  const [eggs, setEggs] = useState(item.eggs);
  const [lupin, setLupin] = useState(item.lupin);
  const [crustacean, setCrustacean] = useState(item.crustacean);
  const [molluscs, setMolluscs] = useState(item.molluscs);
  const [mustard, setMustard] = useState(item.mustard);
  const [celery, setCelery] = useState(item.celery);
  const [fish, setFish] = useState(item.fish);
  const [diet, setDiet] = useState(item.diet);

  const handleDiet = (e: { target: { value: SetStateAction<string> } }) => {
    setDiet(e.target.value);
  };

  const handleCourse = (e: { target: { value: SetStateAction<string> } }) => {
    setCourse(e.target.value);
  };

  const updateData = async (newData: {
    name: string;
    course: string;
    description: string;
    gluten: string;
    dairy: string;
    nuts: string;
    peanuts: string;
    sesame: string;
    soya: string;
    sulphites: string;
    eggs: string;
    lupin: string;
    crustacean: string;
    molluscs: string;
    mustard: string;
    celery: string;
    fish: string;
    diet: string;
  }) => {
    // AXIOS REQUESTS MUST TO BE httpsS ON DEPLOYMENT TO PREVENT
    // (blocked:mixed-content)
    // WILL ONLY WORK AS https IN PRODUCTION
    const { data } = await axios.patch(
      `https://${host}/api/menu-item/${item.id}`,
      newData
    );

    return data;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const updatedMenu = {
      name,
      course,
      description,
      gluten,
      dairy,
      nuts,
      peanuts,
      sesame,
      soya,
      sulphites,
      eggs,
      lupin,
      crustacean,
      molluscs,
      mustard,
      celery,
      fish,
      diet,
    };
    try {
      await updateData(updatedMenu);

      router.push(`/dashboard/menus/menu/${item.menu.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    router.push(`/dashboard/menus/menu/${item.menu.id}`);
  };

  console.log(course);

  return (
    <SidebarWithHeader user={user}>
      <Box marginTop="4rem">
        <Flex minH="100vh" align="center" justify="center" bg="gray.100">
          <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
            <Stack align="center">
              <Heading
                fontWeight="bold"
                fontSize="4xl"
                fontFamily="var(--chakra-fonts-heading)"
                color="blackAlpha.700"
              >
                Edit Dish
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Instructions for using the form will go here
              </Text>
            </Stack>
            <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="name" isRequired>
                        <FormLabel fontWeight="bold">Name</FormLabel>
                        <Input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel fontWeight="bold" htmlFor="course">
                          Course
                        </FormLabel>
                        <Select
                          onChange={handleCourse}
                          value={course}
                          id="course"
                          placeholder="Select course"
                        >
                          <option value="Starters">Starters</option>
                          <option value="Mains">Main</option>
                          <option value="Sides">Sides</option>
                          <option value="Dessert">Dessert</option>
                        </Select>
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email">
                    <FormLabel fontWeight="bold">
                      Description (one sentence)
                    </FormLabel>
                    <Input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold" htmlFor="diet">
                      Is this dish vegan, vegetarian or pescatarian?
                    </FormLabel>
                    <Select
                      onChange={handleDiet}
                      value={diet}
                      id="diet"
                      placeholder="Select diet"
                    >
                      <option value="noDiet">No</option>
                      <option value="vegan">Vegan</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="pescatarian">Pescatarian</option>
                    </Select>
                  </FormControl>
                  <Text fontWeight="bold">
                    Please carefully set the following ingredients:
                  </Text>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Gluten</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setGluten}
                      value={gluten}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Dairy</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setDairy}
                      value={dairy}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Nuts</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setNuts}
                      value={nuts}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Peanuts</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setPeanuts}
                      value={peanuts}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Sesame</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setSesame}
                      value={sesame}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Soya</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setSoya}
                      value={soya}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Sulphites</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setSulphites}
                      value={sulphites}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Eggs</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setEggs}
                      value={eggs}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Lupin</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setLupin}
                      value={lupin}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Crustacean</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setCrustacean}
                      value={crustacean}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Molluscs</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setMolluscs}
                      value={molluscs}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Mustard</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setMustard}
                      value={mustard}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Celery</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setCelery}
                      value={celery}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl isRequired as="fieldset">
                    <FormLabel as="legend">Fish</FormLabel>
                    <RadioGroup
                      colorScheme="cyan"
                      onChange={setFish}
                      value={fish}
                    >
                      <HStack spacing="1.5rem">
                        <Radio value="integral">Integral</Radio>
                        <Radio value="removable">Removable</Radio>
                        <Radio value="notIncluded">Not Included</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <Stack
                    paddingTop="2rem"
                    spacing={6}
                    direction={["column", "row"]}
                  >
                    <Button
                      type="submit"
                      bg="#045666"
                      color="white"
                      w="full"
                      _hover={{
                        opacity: 0.7,
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      bg="red.700"
                      color="white"
                      w="full"
                      _hover={{
                        bg: "red.500",
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const { host } = context.req.headers;

  const token = context.req.cookies.INTELLI_ACCESS_TOKEN;

  // const verifiedUser = jwt.verify(token, "hello");
  // console.log("testing: ", verifiedUser.id)

  if (!token) {
    let user;

    try {
      const verifiedUser = jwt.verify(token, "hello");
      user = await prisma.user.findUnique({
        where: {
          id: Number(verifiedUser.id),
        },
      });
      console.log(user);
      // If there is no match we throw the error not a real user
      if (!user) {
        // throw new Error("Not real user");
        return {
          redirect: {
            permanent: false,
            destination: "/signin",
          },
        };
      }
    } catch (e) {
      console.log(e);
      return {
        redirect: {
          permanent: false,
          destination: "/signin",
        },
      };
    }
  }

  const menuItem = await prisma.menuItems.findMany({
    where: {
      itemId: id,
    },
    include: {
      menu: true,
    },
  });
  return {
    props: { menuItem, host },
  };
};

export default MenuItem;
