// Styles
import "../styles/Shop/Shop.css";
// Components
import ProductsList from "../components/ProductsList";
import ShopSearch from "../components/Shop/ShopSearch";
import ShopCategories from "../components/Shop/ShopCategories";

const Shop = () => {
  return (
    <main className="shop">
      <div className="container-content">
        {/* Filters */}
        <div className="shop__filters">
          <ShopSearch />
          <ShopCategories />
        </div>

        <hr style={{ marginBottom: "2.5rem" }} />

        {/* Products List */}
        <div className="shop__products">
          <ProductsList />
        </div>
      </div>
    </main>
  );
};

export default Shop;
