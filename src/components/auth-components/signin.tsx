import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";

const SignIn = (handleSubmit, setEmail, setPassword, isLoading) => {
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
            Sign in
          </Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                >
                  {/* <Checkbox color={}>Remember me</Checkbox> */}
                  <Link href="/signup" color="blue.400">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  isLoading={isLoading}
                  bgGradient="linear(to-b, #1e8296, #065666)"
                  color="white"
                  _hover={{
                    opacity: 0.7,
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align="center">
                  Need an account?{" "}
                  <Link href="/signup" color="blue.400">
                    Sign up
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

export default SignIn;
