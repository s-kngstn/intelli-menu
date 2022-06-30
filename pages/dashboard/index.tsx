import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import { useRestaurants, useUser } from "../../lib/hooks";
import AddCard from "../../src/components/cards/addCard";
import RestaurantCard from "../../src/components/cards/restaurantCard";
import SidebarWithHeader from "../../src/components/nav-sidebar/sidebarWithNav";

const Dashboard = () => {
  const { user } = useUser();
  const { restaurants, isLoading } = useRestaurants();

  return (
    <SidebarWithHeader user={user}>
      {isLoading ? (
        <Box marginTop="5rem" sx={{ "--my-color": "#0075bf" }}>
          <Skeleton>
            <Heading
              color="blackAlpha.900"
              fontSize="5xl"
              fontWeight="extrabold"
            >
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
          </Skeleton>
        </Box>
      ) : (
        <Box marginTop="5rem" sx={{ "--my-color": "#0075bf" }}>
          <Heading color="blackAlpha.900" fontSize="5xl" fontWeight="extrabold">
            {restaurants.length > 0
              ? `Welcome ${user?.firstName} here are your restaurants.`
              : `Hi ${user?.firstName} dont have any restaurants yet.`}
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
      )}
    </SidebarWithHeader>
  );
};

export default Dashboard;
