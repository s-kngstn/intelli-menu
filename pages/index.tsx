// import { Box, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import CallToActionWithAnnotation from "../src/components/call-to-action/callToAction";
// import WithSubnavigation from "../src/components/nav-homepage/HomeNavigation";

const Home: NextPage = () => {
  return (
    <div>
      {/* <WithSubnavigation /> */}
      <CallToActionWithAnnotation />;
    </div>
  );
};

// yank multiple lines vim [#] <-- number of lines then yy. E.g: 3yy
// delete multiple lines vim [#] <-- number of lines then dd. E.g: 5dd

export default Home;
