import { useState } from "react";
// Styles
import "../../styles/Shop/ShopSearch.css";
// Redux
import { useDispatch } from "react-redux";
// Actions
import { filterByNameThunk } from "../../redux/actions";

const ShopSearch = () => {
  // State
  const [searchName, setSearchName] = useState("");

  // Redux-hooks
  const dispatch = useDispatch();

  // Function
  const filterByName = (e) => {
    e.preventDefault();

    if (!searchName) return;

    dispatch(filterByNameThunk(searchName));

    setSearchName("");
  };

  return (
    <form className="shop__search" onSubmit={filterByName}>
      <input
        type="text"
        placeholder="Type to search"
        className="shop__search-input"
        value={searchName}
        onChange={({ target }) => setSearchName(target.value)}
      />
      <button className="shop__search-btn">Search</button>
    </form>
  );
};

export default ShopSearch;
