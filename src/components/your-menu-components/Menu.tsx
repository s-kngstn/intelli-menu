import {
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

const Menu = ({ children, starters, mains, sides, dessert }) => {
  return (
    <Box>
      <Container py="1rem" maxW="container.sm" bg="whiteAlpha.900">
        {children}
      </Container>
      <Box borderBottom="4px" borderColor="#065666" borderStyle="solid" />
      <Container maxW="container.sm" padding="1rem" bg="gray.200">
        <LinkBox>
          <Link href="/">
            <LinkOverlay>
              <Heading
                as="h1"
                textAlign="center"
                bgGradient="linear(to-l, #76E4F7, #065666)"
                bgClip="text"
              >
                Intellimenu.
              </Heading>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <Heading size="lg" as="h3">
          Starters
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
        />
        {starters}
        <Heading size="lg" as="h3">
          Mains
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
        />
        {mains}
        <Heading size="lg" as="h3">
          Sides
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
        />
        {sides}
        <Heading size="lg" as="h3">
          Desserts
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
        />
        {dessert}
      </Container>
    </Box>
  );
};

export default Menu;
