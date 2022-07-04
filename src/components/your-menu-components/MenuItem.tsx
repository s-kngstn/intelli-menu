const MenuItem = ({ dishName, price }) => {
  return (
    <div>
      <p>{dishName}</p>
      <p>{price}</p>
    </div>
  );
};
export default MenuItem;
