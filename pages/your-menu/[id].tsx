import { Box, Container, Heading } from "@chakra-ui/layout";
import { prisma } from "../../lib/prisma";
import MenuItem from "../../src/components/menu-item-yourmenu/menuItem";

const YourMenu = ({ menuItems }) => {
  console.log(menuItems);
  const starters = menuItems.filter((item) => item.course === "Starters");
  const mains = menuItems.filter((item) => item.course === "Mains");
  const sides = menuItems.filter((item) => item.course === "Sides");
  const desserts = menuItems.filter((item) => item.course === "Dessert");
  console.log(starters);
  console.log(mains);
  console.log(sides);
  console.log(desserts);
  return (
    <Container maxW="container.lg" bg="whiteAlpha.200" color="blackAlpha.800">
      <Heading as="h1" p="2" size="2xl" textAlign="center">
        Restaurant Name
      </Heading>
      <Heading as="h2" p="2" size="md" textAlign="center">
        Menu Name
      </Heading>
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Starters
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {starters.map((items) => {
        return (
          <MenuItem
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })}
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Mains
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      {mains.map((items) => {
        return (
          <MenuItem
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
            name={items.name}
            price={items.price}
            description={items.description}
          />
        );
      })}
    </Container>
  );
};

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export const getServerSideProps = async (
  context: { query: { id: any } },
  req
) => {
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
