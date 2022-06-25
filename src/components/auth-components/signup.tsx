import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";


// LOGIC NEEDS TO BE PASSED DOWN FROM AUTHFORM
const SignUp = ({
  handleSubmit,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  isLoading
}) => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading
            fontWeight="bold"
            fontSize="4xl"
            fontFamily="var(--chakra-fonts-heading)"
            bgGradient="linear(to-l, #76E4F7, #065666)"
            bgClip="text"
          >
            Intellimenu.
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Sign up to get started 😎
          </Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={isLoading}
                  bgGradient="linear(to-b, #1e8296, #065666)"
                  color="white"
                  _hover={{
                    opacity: 0.7,
                  }}
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align="center">
                  Already a user?{" "}
                  <Link href="/signin" color="blue.400">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
