import type { NextPage } from "next";
import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import { prisma } from "../../lib/prisma";
import { allergyFilter } from "../../lib/allergyFilterFunc";
import MenuItem from "../../src/components/your-menu-components/MenuItem";
import Menu from "../../src/components/your-menu-components/Menu";
import CheckBox from "../../src/components/your-menu-components/Checkbox";
import { allergens } from "../../lib/allergens";

const YourMenu: NextPage = ({ yourMenuItems }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  console.log(yourMenuItems)
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };
  function getObjKey(obj, value) {
    return Object.keys(obj).filter((key) => obj[key] === value);
  }

  const menuItemsList = yourMenuItems.map((item, i) => {
    return {
      id: item.itemId,
      dishName: item.name,
      course: item.course,
      description: item.description,
      integral: getObjKey(item, "integral"),
      removable: getObjKey(item, "removable"),
      price: `${item.price}`,
    };
  });

  const usersDiet = allergens
    .map((ingredient) => checkedItems[ingredient.name] && ingredient.name)
    .filter((ingredients) => ingredients && ingredients);

  usersDiet.push(optionValue);
  const filteredMenu = allergyFilter(menuItemsList, usersDiet);
  const courses = ["Starters", "Mains", "Sides", "Dessert"];
  const menuItems = courses.map((course) => {
    return filteredMenu
      .filter((item) => item.course === `${course}`)
      .map((item) => (
        <MenuItem
          key={Math.random()}
          dishName={item.dishName}
          price={item.price}
          description={item.description}
        />
      ));
  });

  return (
    <Box height="-webkit-fit-content" backgroundColor="#065666">
      <Menu
        starters={menuItems[0]}
        mains={menuItems[1]}
        sides={menuItems[2]}
        dessert={menuItems[3]}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Container maxW="container.sm" marginBottom="1rem">
            <Text fontWeight="bold" fontSize="lg" textAlign="left">
              Are you on a special diet?
            </Text>
            <Select
              bg="whiteAlpha.900"
              borderColor="whiteAlpha.900"
              size="xs"
              defaultValue=" "
              name="selectList"
              id="selectList"
              onChange={handleSelect}
            >
              <option value=" ">No Diet</option>{" "}
              <option value="veg">Vegetarian</option>{" "}
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
            </Select>
          </Container>
          <fieldset>
            <Text px="1rem" fontWeight="bold" fontSize="lg" textAlign="left">
              Select any of the 14 allergens that apply to you
            </Text>
            <List
              px="1rem"
              maxW="container.sm"
              display="flex"
              flexWrap="wrap"
              alignItems="flex-start"
            >
              {allergens.map((item) => (
                <ListItem marginRight="10px" key={item.key}>
                  <label key={item.key}>
                    <CheckBox
                      name={item.name}
                      checked={checkedItems[item.name]}
                      onChange={handleChange}
                    />
                    {` ${item.key}`}
                  </label>
                </ListItem>
              ))}
            </List>
          </fieldset>
        </Flex>
      </Menu>
    </Box>
  );
};

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export const getServerSideProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  const yourMenuItems = await prisma.menuItems.findMany({
    where: {
      menuId: Number(id),
    },
    include: {
      menu: true,
    },
  });
  return {
    props: { yourMenuItems },
  };
};

export default YourMenu;
