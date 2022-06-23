import {
  MdHome,
  MdRestaurantMenu,
  MdMenuBook,
  MdPostAdd,
} from "react-icons/md";

export const sidebarMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Restaurants",
    icon: MdRestaurantMenu,
    route: "/restaurants",
  },
  {
    name: "Menus",
    icon: MdMenuBook,
    route: "/menus",
  },
  {
    name: "Create",
    icon: MdPostAdd,
    route: "/create",
  },
];
