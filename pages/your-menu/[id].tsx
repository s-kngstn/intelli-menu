// import { Box, Container, Heading } from "@chakra-ui/layout";
// // import { useState } from "react";
import type { NextPage } from "next";
import { useState } from "react";
import { prisma } from "../../lib/prisma";
// import MenuItem from "../../src/components/menu-item-yourmenu/menuItem";

// import useSWR from "swr";
// import styles from "../styles/Home.module.css";
import { allergyFilter } from "../../lib/allergyFilterFunc";
import MenuItem from "../../src/components/your-menu-components/MenuItem";
import Menu from "../../src/components/your-menu-components/Menu";
import Checkbox from "../../src/components/your-menu-components/Checkbox";
import { allergens } from "../../lib/allergens";

// TODO:
// [] - Fix Styling (Draw out how u want it, remove all classes and start over.)
// [] - Define all types
// [] - Build README Documentation on how to build for restaurants and input the xlsx
// [] - Deploy

// to run local server type npm run dev

const YourMenu: NextPage = ({ yourMenuItems }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };
  // const fetcher = (...args) =>
  //   fetch.apply(null, args).then((res) => res.json());
  // const { data, error } = useSWR(`http://localhost:3000/api`, fetcher);
  // // const { data, error } = useSWR("https://interactive-dietary-menu.vercel.app/api", fetcher);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  function getObjKey(obj, value) {
    return Object.keys(obj).filter((key) => obj[key] === value);
  }

  console.log(yourMenuItems);
  // console.log(getObjKey(menuItems[0], "notIncluded"));
  const menuItemsList = yourMenuItems.map((item, i) => {
    return {
      id: item.itemId,
      dishName: item.name,
      course: item.course,
      description: item.description,
      integral: getObjKey(item, "integral"),
      removable: getObjKey(item, "removable"),
      price: `${item.price}`,
    };
  });

  console.log(menuItemsList);

  const usersDiet = allergens
    .map((ingredient) => checkedItems[ingredient.name] && ingredient.name)
    .filter((ingredients) => ingredients && ingredients);

  usersDiet.push(optionValue);
  const filteredMenu = allergyFilter(menuItemsList, usersDiet);
  // courses need a change
  const courses = ["Starters", "Mains", "Sides", "Dessert"];
  const menuItems = courses.map((course) => {
    const courses = filteredMenu
      .filter((item) => item.course === `${course}`)
      .map((item) => (
        <MenuItem
          key={Math.random()}
          dishName={item.dishName}
          price={item.price}
        />
      ));
    return courses;
  });

  return (
    <div>
      <h1>Interactive Diet Menu</h1>
      <Menu
        starters={menuItems[0]}
        mains={menuItems[1]}
        sides={menuItems[2]}
        dessert={menuItems[3]}
      >
        <section>
          <div>
            <select
              defaultValue=" "
              name="selectList"
              id="selectList"
              onChange={handleSelect}
            >
              <option value=" ">-- Choose Diet --</option> {" "}
              <option value=" ">No Diet</option> {" "}
              <option value="veg">Vegetarian</option> {" "}
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
            </select>
          </div>
          {/* <div className={styles.checkboxContainer}> */}
          {/* <div className={styles.checkboxItems}> */}
          <fieldset>
            <legend>Select any of the 14 allergens</legend>
            <ul>
              {allergens.map((item) => (
                <li key={item.key}>
                  <label key={item.key}>
                    <Checkbox
                      name={item.name}
                      checked={checkedItems[item.name]}
                      onChange={handleChange}
                    />
                    {item.key}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
          {/* </div> */}
          {/* </div> */}
        </section>
      </Menu>
    </div>
  );
};

export default YourMenu;

// const YourMenu = ({ menuItems }) => {
//   function getObjKey(obj, value) {
//     return Object.keys(obj).filter((key) => obj[key] === value);
//   }

//   console.log(menuItems)
//   // console.log(getObjKey(menuItems[0], "notIncluded"));
//   const menuItemsList = menuItems.map((item, i) => {
//     return {
//       id: item.itemId,
//       dishName: item.name,
//       course: item.course,
//       description: item.description,
//       integral: getObjKey(item, "integral"),
//       removable: getObjKey(item, "removable"),
//       price: `${item.price}`,
//     };
//   });

//   console.log(menuItemsList)

//   const menuDetails = menuItems[0].menu;

//   // THIS WILL BE FOR THE FILTERING OF COURSES
//   // const starterList = menuItems.filter((item) => item.course === "Starters");
//   // const mainsList = menuItems.filter((item) => item.course === "Mains");
//   // const sidesList = menuItems.filter((item) => item.course === "Sides");
//   // const dessertsList = menuItems.filter((item) => item.course === "Dessert");
//   // const [starters, setStarters] = useState(starterList);
//   // const [mains, setMains] = useState(mainsList);
//   // const [sides, setSides] = useState(sidesList);
//   // const [desserts, setDesserts] = useState(dessertsList);
//   // console.log(mains);

//   return (
//     <Container maxW="container.lg" bg="whiteAlpha.200" color="blackAlpha.800">
//       <Heading as="h1" p="2" size="2xl" textAlign="center">
//         Restaurant
//       </Heading>
//       <Heading as="h2" p="2" size="md" textAlign="center">
//         {menuDetails.name}
//       </Heading>
//       <Heading as="h3" p="2" size="lg" textAlign="left">
//         Starters
//       </Heading>
//       <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
//       {menuItemsList.map((items) => {
//         return (
//           <MenuItem
//             key={items.itemId}
//             name={items.dishName}
//             price={items.price}
//             description={items.description}
//           />
//         );
//       })}
//       {/*
//       <Heading as="h3" p="2" size="lg" textAlign="left">
//         Mains
//       </Heading>
//       <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
//       {mains.map((items) => {
//         return (
//           <MenuItem
//             key={items.itemId}
//             name={items.name}
//             price={items.price}
//             description={items.description}
//           />
//         );
//       })}
//       <Heading as="h3" p="2" size="lg" textAlign="left">
//         Sides
//       </Heading>
//       <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
//       {sides.map((items) => {
//         return (
//           <MenuItem
//             key={items.itemId}
//             name={items.name}
//             price={items.price}
//             description={items.description}
//           />
//         );
//       })}
//       <Heading as="h3" p="2" size="lg" textAlign="left">
//         Dessert
//       </Heading>
//       <Box borderTop="2px" borderColor="blackAlpha.800" borderStyle="solid" />
//       {desserts.map((items) => {
//         return (
//           <MenuItem
//             key={items.itemId}
//             name={items.name}
//             price={items.price}
//             description={items.description}
//           />
//         );
//       })} */}
//     </Container>
//   );
// };

// GET SERVER SIDE PROPS FOR ALL THE MENU ITEMS AND MENU INFO
// GENERATE THE QR CODE ON A PAGE BY ITSELF, WHILE THIS PAGE WILL BE THE ONE THE QR CODE LINKS TOO

export const getServerSideProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  const yourMenuItems = await prisma.menuItems.findMany({
    where: {
      menuId: Number(id),
    },
    include: {
      menu: true,
    },
  });
  return {
    props: { yourMenuItems },
  };
};

// export default YourMenu;
