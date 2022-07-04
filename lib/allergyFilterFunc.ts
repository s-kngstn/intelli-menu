// @ts-check
/**
 * This allergy filter takes a menu array of menu item objects
 * It then filters replaces the menu with a new menu built to fit the restaurant guests diet, allergy + intolerance needs
 *
 * It is able to do this by first checking to see if any of the menu items 'integral' and 'removable' ingredients
 * match up with the second parameter, the usersDiet. (23-31)
 *
 * If any menu items do not contain any integral ingredients that have matched with the usersDiet
 * then they are safe to be pushed to the allergyFreeMenu. (34)
 *
 * If any menu items end up not containing any inegral ingredients from the usersDiet, but
 * contained some removable items, they will be pushed to the removables array. (36-38)
 *
 * The removables array is scanned through and checked against the allergyFreeMenu to see if there is a match,
 * if there is, the item is modified with a '(removable)' tag so the user understands they can enjoy the dish
 * but with modifications. (41-49)
 */
export const allergyFilter = (
  menu: {
    id: string;
    dishName: string;
    course: string;
    description: string;
    integral: string[];
    removable: string[];
    price: string;
  }[],
  usersDiet: string[]
) => {
  interface Menu {
    id: string;
    dishName: string;
    course: string;
    description: string;
    integral: string[];
    removable: string[];
    price: string;
  }
  const removables: Menu[] = [];
  const allergyFreeMenu: Menu[] = [];
  menu.forEach((eachDish) => {
    const containsAllergen = eachDish.integral.some((ingredient) =>
      usersDiet.includes(ingredient)
    );
    const containsRemovableAllergen = eachDish.removable.some((ingredient) =>
      usersDiet.includes(ingredient)
    );
    // eslint-disable-next-line no-unused-expressions
    !containsAllergen ? allergyFreeMenu.push(eachDish) : null;

    // eslint-disable-next-line no-unused-expressions
    containsRemovableAllergen && !containsAllergen
      ? removables.push(eachDish)
      : null;
  });

  removables.forEach((removableItem) => {
    if (allergyFreeMenu.includes(removableItem)) {
      const index = allergyFreeMenu.indexOf(removableItem);
      allergyFreeMenu.splice(index, 1);
      allergyFreeMenu.push({
        id: removableItem.id,
        dishName: `${removableItem.dishName} (can be modified to fit your preferences 👩🏽‍🍳)`,
        course: removableItem.course,
        description: removableItem.description,
        integral: removableItem.integral,
        removable: removableItem.removable,
        price: removableItem.price,
      });
    } else {
      allergyFreeMenu.push({
        id: removableItem.id,
        dishName: `${removableItem.dishName} (can be modified to fit your preferences 👩🏽‍🍳)`,
        course: removableItem.course,
        description: removableItem.description,
        integral: removableItem.integral,
        removable: removableItem.removable,
        price: removableItem.price,
      });
    }
  });

  return allergyFreeMenu;
};
