// import { Box, Flex, Input, Button } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Text,
  Button,
  Heading,
  HStack,
  InputGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, FC } from "react";
import { useSWRConfig } from "swr";
import { authSignIn, authSignUp } from "../../../lib/auth";

interface Mode {
  mode: "signin" | "signup";
}

const AuthForm: FC<Mode> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    if (mode === "signin") {
      await authSignIn(mode, { email, password });
    }
    if (mode === "signup") {
      await authSignUp(mode, {
        firstName,
        lastName,
        email,
        password,
      });
    }
    setIsLoading(false);
    router.push("/");
  };

  if (mode === "signup") {
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
                    <Link href="/signin" color="#065666">
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
  }
  if (mode === "signin") {
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
                    <Link href="/signup" color="#065666">
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
                    <Link href="/signup" color="#065666">
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
  }
  return { mode };
};

export default AuthForm;
