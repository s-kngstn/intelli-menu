import { Box, Heading } from "@chakra-ui/layout";
import SidebarWithHeader from "../src/components/nav-sidebar/sidebarWithNav";

const Dashboard = () => {
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem" sx={{ "--my-color": "#0075bf" }}>
        <Heading color="blackAlpha.900" fontSize="5xl" fontWeight="extrabold">
          Welcome user, here are your restaurants.
        </Heading>
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;
