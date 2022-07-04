const Dropdown = (props) => {
  return (
    <select name="selectList">
      <option value="none"></option> <option value="veg">Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="pesc">Pescatarian</option>
    </select>
  );
}

export default Dropdown;

// This is not currently being used