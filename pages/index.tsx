import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box sx={{ "--my-color": "#0075bf" }}>
      {/* <Heading color="var(--my-color)" size="lg">
        Welcome user, here are your restaurants.
      </Heading> */}
      <Heading
        // bgGradient="linear(to-l, #065666, #76E4F7)"
        // bgClip="text"
        color="blackAlpha.900"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Welcome user, here are your restaurants.
      </Heading>
    </Box>
  );
};

// yank multiple lines vim [#] <-- number of lines then yy. E.g: 3yy
// delete multiple lines vim [#] <-- number of lines then dd. E.g: 5dd
export default Home;
