import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import SidebarWithHeader from "../../../src/components/nav-sidebar/sidebarWithNav";

const AddRestaurant: NextPage = () => {
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem">
        <form>
          <h1>RESTAURANT FORM</h1>
        </form>
      </Box>
    </SidebarWithHeader>
  );
};

export default AddRestaurant;
