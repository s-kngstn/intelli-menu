import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
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

  const salt = bcrypt.genSaltSync();
  await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      first_name: "Sam",
      last_name: "Kingston",
      email: "user@example.com",
      password: bcrypt.hashSync("password123", salt),
    },
  });
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
