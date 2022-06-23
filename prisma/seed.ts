import { PrismaClient } from "@prisma/client";
import { restaurantsData } from "./testData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    restaurantsData.map(async (restaurants) => {
      return prisma.restaurant.upsert({
        where: { name: restaurants.name },
        update: {},
        create: {
          name: restaurants.name,
          address: restaurants.address,
          menus: {
            create: restaurants.menus.map((menu) => ({
              name: menu.name,
              menuItems: {
                create: menu.menuItems.map((item) => {
                  return {
                    name: item.name,
                    course: item.course,
                    price: item.price,
                    integral: item.integral,
                    removable: item.removable,
                    vegan: item.vegan,
                    vegetarian: item.vegetarian,
                    pescatarian: item.pescatarian,
                  };
                }),
              },
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
