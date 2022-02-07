import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";

//components
import ProductsList from "../components/ProductsList";

//Actions
import {
  filterByCategoryThunk,
  getCategoriesThunk,
  getProductsListThunk,
} from "../redux/actions";

const Shop = () => {
  //Redux-hooks
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  //Functions
  const filterCategory = (id) => {
    dispatch(filterByCategoryThunk(id));
  };

  const filterReset = () => dispatch(getProductsListThunk());

  return (
    <main className="font-literation main-shop">
      <div className="container-content">
        {/* Filter */}
        <div className="filters max-w-lg mx-auto text-sm">
          <form className="mb-4 flex items-center justify-center gap-2.5">
            <input
              type="text"
              placeholder="Type to search"
              className="px-5 py-2.5 border"
            />
            <button className="px-5 py-2.5 border-2 border-black hover:bg-black hover:text-white transition duration-300">
              Search
            </button>
          </form>
          <div className="categories">
            <ul className="flex justify-center items-center">
              <li className="category-btn border-r">
                <button onClick={filterReset}>All</button>
              </li>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="category-btn border-r last:border-r-0"
                >
                  <button onClick={() => filterCategory(category.id)}>
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mb-10" />

        {/* Products List */}
        <div className="products-grid grid grid-cols-1 md:grid-cols-3">
          <ProductsList />
        </div>
      </div>
    </main>
  );
};

export default Shop;
