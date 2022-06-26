import { Box, Flex, Heading } from "@chakra-ui/layout";
import AddCard from "../../src/components/cards/addCard";
import RestaurantCard from "../../src/components/cards/restaurantCard";
import SidebarWithHeader from "../../src/components/nav-sidebar/sidebarWithNav";

const Dashboard = () => {
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem" sx={{ "--my-color": "#0075bf" }}>
        <Heading color="blackAlpha.900" fontSize="5xl" fontWeight="extrabold">
          Welcome user, here are your restaurants.
        </Heading>
        <Flex flexDirection="row" flexWrap="wrap">
          <AddCard />
          <RestaurantCard />
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;
