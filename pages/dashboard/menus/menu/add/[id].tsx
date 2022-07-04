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
import { useUser } from "../../../../../lib/hooks";
import SidebarWithHeader from "../../../../../src/components/nav-sidebar/sidebarWithNav";

const AddItem: NextPage = ({ host, id }) => {
  const { user } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [gluten, setGluten] = useState("integral");
  const [dairy, setDairy] = useState("integral");
  const [nuts, setNuts] = useState("integral");
  const [peanuts, setPeanuts] = useState("integral");
  const [sesame, setSesame] = useState("integral");
  const [soya, setSoya] = useState("integral");
  const [sulphites, setSulphites] = useState("integral");
  const [eggs, setEggs] = useState("integral");
  const [lupin, setLupin] = useState("integral");
  const [crustacean, setCrustacean] = useState("integral");
  const [molluscs, setMolluscs] = useState("integral");
  const [mustard, setMustard] = useState("integral");
  const [celery, setCelery] = useState("integral");
  const [fish, setFish] = useState("integral");
  const [vegan, setVegan] = useState("integral");
  const [veg, setVeg] = useState("integral");
  const [pescatarian, setPescatarian] = useState("integral");

  const handleVegan = (e: { target: { value: SetStateAction<string> } }) => {
    setVegan(e.target.value);
  };

  const handleVeg = (e: { target: { value: SetStateAction<string> } }) => {
    setVeg(e.target.value);
  };

  const handlePescatarian = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPescatarian(e.target.value);
  };

  const handleCourse = (e: { target: { value: SetStateAction<string> } }) => {
    setCourse(e.target.value);
  };

  const createData = async (newData) => {
    const { data } = await axios.post(
      `http://${host}/api/menu-item/add`,
      newData
    );

    return data;
  };

  const menuID = Number(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createItem = {
      name,
      course,
      price,
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
      vegan,
      veg,
      pescatarian,
      id: menuID,
    };
    try {
      await createData(createItem);

      router.push(`/dashboard/menus/menu/${menuID}`);
    } catch (error) {
      console.log(error);
    }
  };

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
                Add Dish
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
                      <FormControl id="name" isRequired>
                        <FormLabel fontWeight="bold">
                          Price (e.g: 17.50)
                        </FormLabel>
                        <Input
                          type="text"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
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
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold" htmlFor="diet">
                      What are the vegan options for this dish?
                    </FormLabel>
                    <Select
                      onChange={handleVegan}
                      value={vegan}
                      id="diet"
                      placeholder="Select vegan option"
                    >
                      <option value="notIncluded">This dish is vegan</option>
                      <option value="integral">This dish is NOT vegan</option>
                      <option value="removable">Dish can be made vegan</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold" htmlFor="diet">
                      What are the vegetarian options for this dish?
                    </FormLabel>
                    <Select
                      onChange={handleVeg}
                      value={veg}
                      id="diet"
                      placeholder="Select vegetarian option"
                    >
                      <option value="notIncluded">
                        This dish is vegetarian
                      </option>
                      <option value="integral">
                        This dish is NOT vegetarian
                      </option>
                      <option value="removable">
                        Dish can be made vegetarian
                      </option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontWeight="bold" htmlFor="diet">
                      What are the pescatarian options for this dish?
                    </FormLabel>
                    <Select
                      onChange={handlePescatarian}
                      value={pescatarian}
                      id="diet"
                      placeholder="Select pescatarian option"
                    >
                      <option value="notIncluded">
                        This dish is pescatarian
                      </option>
                      <option value="integral">
                        This dish is NOT pescatarian
                      </option>
                      <option value="removable">
                        Dish can be made pescatarian
                      </option>
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
                      // onClick={handleCancel}
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
  const { host } = context.req.headers;
  const { id } = context.query;
  console.log(context);

  return {
    props: { host, id },
  };
};

export default AddItem;
