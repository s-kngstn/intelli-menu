export const restaurantsData = [
  {
    name: "The Duke",
    address: "London, UK",
    menus: [
      {
        name: "Lunch Menu",
        menuItems: [
          {
            name: "Pie & Mash",
            course: "Mains",
            price: 22.0,
            integral: "['gluten']",
            removable: "[]",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
          {
            name: "Sticky Toffee Pudding",
            course: "Dessert",
            price: 12.11,
            integral: "['gluten', 'eggs']",
            removable: "['sesame_seeds']",
            vegan: false,
            vegetarian: true,
            pescatarian: false,
          },
        ],
      },
      {
        name: "Christmas Menu",
        menuItems: [
          {
            name: "Roast Turkey",
            course: "Mains",
            price: 18.99,
            integral: "['gluten', 'eggs']",
            removable: "['sesame_seeds']",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
        ],
      },
    ],
  },
  {
    name: "Mc Donalds",
    address: "London, UK",
    menus: [
      {
        name: "Super Saver Menu",
        menuItems: [
          {
            name: "Cheeseburger",
            course: "Mains",
            price: 0.99,
            integral: "['eggs', 'dairy']",
            removable: "['sesame_seeds', 'gluten']",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
          {
            name: "Four Piece Nuggets",
            course: "Starter",
            price: 0.99,
            integral: "['gluten']",
            removable: "['sesame_seeds', 'peanuts']",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
        ],
      },
      {
        name: "Main Menu",
        menuItems: [
          {
            name: "Big Mac",
            course: "Mains",
            price: 3.99,
            integral: "['gluten', 'eggs']",
            removable: "['sesame_seeds', 'celery']",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
          {
            name: "Mc Flurry",
            course: "Dessert",
            price: 1.5,
            integral: "['gluten', 'eggs']",
            removable: "['sesame_seeds', 'celery']",
            vegan: false,
            vegetarian: false,
            pescatarian: false,
          },
        ],
      },
    ],
  },
];
