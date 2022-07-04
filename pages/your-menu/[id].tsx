import { Box, Container, Heading } from "@chakra-ui/layout";
// import { useState } from "react";
import { prisma } from "../../lib/prisma";
import MenuItem from "../../src/components/menu-item-yourmenu/menuItem";

const YourMenu = ({ menuItems }) => {
  // menu will need to be filtered out for diet and allergies first, then filtered by course
  // for each of the allergies, i need to make checkbox to remove them from sight if they are integral to a dish
  function getObjKey(obj, value) {
    return Object.keys(obj).filter((key) => obj[key] === value);
  }

  console.log(menuItems)
  // console.log(menuItems[0].name);
  // console.log(getObjKey(menuItems[0], "integral"));
  // console.log(getObjKey(menuItems[0], "removable"));
  // console.log(getObjKey(menuItems[0], "notIncluded"));

  const menuObj = {
    dishName: menuItems[13].name,
    course: menuItems[13].course,
    description: menuItems[13].description,
    intergral: getObjKey(menuItems[13], "integral"),
    removable: getObjKey(menuItems[13], "removable"),
    price: `£${menuItems[13].price}`,
  };

  console.log(menuObj)

  // const noGluten = menuItems.filter((item) => item.gluten === "notIncluded");
  // console.log(noGluten);
  const menuDetails = menuItems[0].menu;

  // THIS WILL BE FOR THE FILTERING OF COURSES
  // const starterList = menuItems.filter((item) => item.course === "Starters");
  // const mainsList = menuItems.filter((item) => item.course === "Mains");
  // const sidesList = menuItems.filter((item) => item.course === "Sides");
  // const dessertsList = menuItems.filter((item) => item.course === "Dessert");
  // const [starters, setStarters] = useState(starterList);
  // const [mains, setMains] = useState(mainsList);
  // const [sides, setSides] = useState(sidesList);
  // const [desserts, setDesserts] = useState(dessertsList);
  // console.log(mains);

  return (
    <Container maxW="container.lg" bg="whiteAlpha.200" color="blackAlpha.800">
      <Heading as="h1" p="2" size="2xl" textAlign="center">
        Restaurant
      </Heading>
      <Heading as="h2" p="2" size="md" textAlign="center">
        {menuDetails.name}
      </Heading>
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Starters
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {menuItems.map((items) => {
        return (
          <MenuItem
            key={items.itemId}
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })}
      {/* 
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Mains
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {mains.map((items) => {
        return (
          <MenuItem
            key={items.itemId}
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })}
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Sides
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {sides.map((items) => {
        return (
          <MenuItem
            key={items.itemId}
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })}
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Dessert
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {desserts.map((items) => {
        return (
          <MenuItem
            key={items.itemId}
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })} */}
    </Container>
  );
};

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export const getServerSideProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  const menuItems = await prisma.menuItems.findMany({
    where: {
      menuId: Number(id),
    },
    include: {
      menu: true,
    },
  });
  return {
    props: { menuItems },
  };
};

export default YourMenu;
