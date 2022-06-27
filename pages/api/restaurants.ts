import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/routeValidator";

export default validateRoute(async (req, res, user) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      userId: user.id,
    },
  });

  // Below works and gets menus, but get it once on the page
  // const menus = await prisma.menu.findMany({
  //   where: {
  //     restaurantId: user.id,
  //   },
  // });

  // Below works and gets menus, but get it once on the page
  // const menus = await prisma.menuItems.findMany({
  //   where: {
  //     menuId: user.id,
  //   },
  // });

  res.json(restaurants);
});
