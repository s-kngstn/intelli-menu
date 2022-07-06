import {
  Container,
  SimpleGrid,
  // Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { NextPage } from "next";
import womanMenu from "../public/images/woman-lookingat-menu.jpeg";
import womenEating from "../public/images/three-eating.jpeg";
import groupEating from "../public/images/group-eating.jpeg";
import WithSubnavigation from "../src/components/nav-homepage/HomeNavigation";

const About: NextPage = () => {
  return (
    <>
      <WithSubnavigation />
      <Container maxW="7xl" paddingTop="13rem">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
              lineHeight="110%"
            >
              <Text
                bgGradient="linear(to-l, #76E4F7, #065666)"
                bgClip="text"
                as="span"
              >
                Allow
              </Text>{" "}
              your guests to see the menu as they want it{" "}
            </Heading>
            <Text color="gray.500" fontSize="lg">
              Often restaurants have yet to provide allergen and dietary
              information on their menus, and when they do often the menu
              becomes hard to read and over crowded with extra content that can
              lead to information fatigue. We provide menu’s that are easy to
              read. Displaying only the name of the dish, a small description,
              and the price.
            </Text>
          </Stack>
          <Flex>
            <Box color="#76E4F7" borderStyle="solid" border="8px" p="1rem">
              <Image alt="feature image" src={womanMenu} objectFit="cover" />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW="7xl" paddingTop="13rem">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Box color="#76E4F7" borderStyle="solid" border="8px" p="1rem">
              <Image alt="feature image" src={womenEating} objectFit="cover" />
            </Box>
          </Flex>
          <Stack textAlign="right" spacing={4}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
              lineHeight="110%"
            >
              <Text
                bgGradient="linear(to-l, #76E4F7, #065666)"
                bgClip="text"
                as="span"
              >
                Ensure
              </Text>{" "}
              your guests feel safe and satisfied{" "}
            </Heading>
            <Text color="gray.500" fontSize="lg">
              Sometimes your guests avoid going out to eat due to being
              embarrassed about sharing their allergies, or just tired of having
              to repeat the same long process of: <br />
              Informing you of their allergies, Having your staff go to the chef
              and explain the situation, Then returning to the table and
              hopefully conveying the correct information.
            </Text>
            <Text color="gray.500" fontSize="lg">
              During weekends and peak hours of operation, these extra steps are
              almost certain to guarantee long wait times for all guests, which
              in turn, lessens the experience.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW="7xl" py="13rem">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
              lineHeight="110%"
            >
              <Text
                bgGradient="linear(to-l, #76E4F7, #065666)"
                bgClip="text"
                as="span"
              >
                Provide
              </Text>{" "}
              an unforgettable dining experience{" "}
            </Heading>
            <Text color="gray.500" fontSize="lg">
              There are often times your guests might be going on a date, or
              having an important business meeting. Most of these guests would
              rather not have to explain in public that they do not like onions,
              cannot eat fish, or they have a peanut allergy. Intellimenu
              provides a safe space for your regulars and new guests alike to
              explore a menu catered exclusively to their needs.
            </Text>
          </Stack>
          <Flex>
            <Box color="#76E4F7" borderStyle="solid" border="8px" p="1rem">
              <Image alt="feature image" src={groupEating} objectFit="cover" />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default About;
