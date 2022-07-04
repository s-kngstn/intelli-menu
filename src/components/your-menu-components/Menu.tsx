const Menu = ({ children, starters, mains, sides, dessert }) => {
  return (
    <section>
      {children}
      <h3>Starters</h3>
      {starters}
      <h3>Mains</h3>
      {mains}
      <h3>Sides</h3>
      {sides}
      <h3>Dessert</h3>
      {dessert}
    </section>
  );
};

export default Menu;
