import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/routeValidator";

export default validateRoute(async (req, res, user) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      userId: user.id,
    },
  });

  res.json(restaurants);
});
