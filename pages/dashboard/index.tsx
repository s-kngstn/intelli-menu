import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useRestaurants } from "../../lib/hooks";
import AddCard from "../../src/components/cards/addCard";
import RestaurantCard from "../../src/components/cards/restaurantCard";
import SidebarWithHeader from "../../src/components/nav-sidebar/sidebarWithNav";

const Dashboard = () => {
  const { restaurants } = useRestaurants();

  console.log(restaurants);

  // console.log(user);
  return (
    <SidebarWithHeader>
      <Box marginTop="5rem" sx={{ "--my-color": "#0075bf" }}>
        <Heading color="blackAlpha.900" fontSize="5xl" fontWeight="extrabold">
          Welcome here are your restaurants.
        </Heading>
        <Flex flexDirection="row" flexWrap="wrap">
          <AddCard />
          {restaurants.map((restaurant: any) => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default Dashboard;
