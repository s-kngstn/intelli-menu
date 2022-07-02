import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { prisma } from "../../lib/prisma";

const YourMenu = ({ menuItems }) => {
  console.log(menuItems);
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
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Calamari
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £11
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Mains
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Fried Chicken
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £20
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Cheeseburger
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £12
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Doner Kebab
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £14
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Sides
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Mashed Potatoes
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £6.50
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
      <Heading as="h3" p="2" size="lg" textAlign="left">
        Dessert
      </Heading>
      <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading color="#065666" size="sm">
              Apple Pie
            </Heading>
          </Box>
          <Spacer />
          <Flex p="2">
            <Text fontWeight="bold" colorScheme="teal">
              £7
            </Text>
          </Flex>
        </Flex>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Text size="md">A short description of the menu Item</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export const getServerSideProps = async (context: { query: { id: any } }, req) => {
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
