// Styles
import "../../styles/Shop/ShopCategories.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import {
  filterByCategoryThunk,
  getCategoriesThunk,
  getProductsListThunk,
} from "../../redux/actions";
import { useEffect } from "react";

const ShopCategories = () => {
  // Redux-hooks
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  // Functions
  const filterCategory = (id) => {
    dispatch(filterByCategoryThunk(id));
  };

  const filterReset = () => dispatch(getProductsListThunk());

  return (
    <div className="shop__categories">
      <ul className="shop__categories-list">
        <li className="shop__categories-item">
          <button onClick={filterReset}>All</button>
        </li>
        {categories.map((category) => (
          <li key={category.id} className="shop__categories-item">
            <button onClick={() => filterCategory(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCategories;
