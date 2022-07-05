import { Box, Heading, Container, Text, Stack, Link } from "@chakra-ui/react";

const CallToActionWithAnnotation = () => {
  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "7xl" }}
          lineHeight="110%"
        >
          <Text
            bgGradient="linear(to-l, #76E4F7, #065666)"
            bgClip="text"
            as="span"
          >
            Abstract
          </Text>
          <br />
          what you dont need
        </Heading>
        <Text color="Gray.500">
          Introducing a cutting edge filtering system that abstracts menu items
          away from your restaurant guests based on dietary preferences and
          allergies. Giving diners the confidence to browse your menus knowing
          everything they see is a dish they can enjoy.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Link
            bgGradient="linear(to-b, #1e8296, #065666)"
            color="white"
            rounded="full"
            px={9}
            py={3}
            _hover={{
              opacity: 0.7,
            }}
            href="/signup"
          >
            Get Started
          </Link>
          <Link href="/about" variant="link" color="#065666" size="sm">
            Learn more
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CallToActionWithAnnotation;
