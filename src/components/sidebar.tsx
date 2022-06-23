import { Box, List, Divider } from "@chakra-ui/layout";
import { sidebarMenu } from "./menus";
import MenuItem from "./menuItem";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      bg="blackAlpha.400"
      paddingX="10px"
      color="#beef4d"
    >
      <Box paddingY="33px" height="100%">
        {/** Logo */}
        <Box width="220px" marginBottom="45px" paddingX="10px">
          Intelli-Menu
        </Box>
        {/** Menu */}
        <Box>
          <List spacing={2}>
            {sidebarMenu.map((menu) => (
              <MenuItem name={menu.name} route={menu.route} icon={menu.icon} />
            ))}
          </List>
        </Box>
        <Divider color="gray.800" paddingY="20px" />
      </Box>
    </Box>
  );
};

export default Sidebar;
