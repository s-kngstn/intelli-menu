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
            // color="green.400"
          >
            Abstract
          </Text>
          <br />
          what you dont need
        </Heading>
        <Text color="Gray.500">
          Tincidunt ornare massa eget egestas purus viverra accumsan in nisl
          nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu
          bibendum at varius vel pharetra vel turpis
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
          <Link href="/signup" variant="link" color="#065666" size="sm">
            Learn more
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CallToActionWithAnnotation;
