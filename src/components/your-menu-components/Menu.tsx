import {
  Box,
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

const Menu = ({ children, starters, mains, sides, dessert, name }) => {
  return (
    <Box>
      <Container py="1rem" maxW="container.sm" bg="gray.200" marginBottom="4px">
        {children}
      </Container>
      <Container maxW="container.sm" padding="1rem" bg="gray.200">
        <LinkBox>
          <Heading as="h1" textAlign="center" color="blackAlpha.800">
            {name}
          </Heading>
          <Link href="/">
            <LinkOverlay>
              <Heading as="h3" fontSize="large" textAlign="center" color="blackAlpha.800">
                Powered by
              </Heading>
              <Heading
                as="h3"
                fontSize="large"
                textAlign="center"
                bgGradient="linear(to-l, #76E4F7, #065666)"
                bgClip="text"
              >
                Intellimenu.
              </Heading>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <Heading marginTop="1rem" size="lg" as="h3">
          Starters
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          marginBottom="1rem"
        />
        {starters}
        <Heading marginTop="1rem" size="lg" as="h3">
          Mains
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          marginBottom="1rem"
        />
        {mains}
        <Heading marginTop="1rem" size="lg" as="h3">
          Sides
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          marginBottom="1rem"
        />
        {sides}
        <Heading marginTop="1rem" size="lg" as="h3">
          Desserts
        </Heading>
        <Box
          borderBottom="2px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          marginBottom="1rem"
        />
        {dessert}
      </Container>
    </Box>
  );
};

export default Menu;
