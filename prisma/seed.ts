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
                    description: item.description,
                    gluten: item.gluten,
                    dairy: item.dairy,
                    nuts: item.nuts,
                    peanuts: item.peanuts,
                    sesame: item.sesame,
                    soya: item.soya,
                    sulphites: item.sulphites,
                    eggs: item.eggs,
                    lupin: item.lupin,
                    crustacean: item.crustacean,
                    molluscs: item.molluscs,
                    mustard: item.mustard,
                    celery: item.celery,
                    fish: item.fish,
                    diet: item.diet,
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
      firstName: "Sam",
      lastName: "Kingston",
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
