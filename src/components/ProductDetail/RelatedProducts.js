// Styles
import "../../styles/ProductDetail/RelatedProducts.css";
// Components
import ProductsList from "../Products/ProductsList";

const RelatedProducts = ({ productDetail }) => {
  return (
    <div>
      <div className="related-products__separator text-4x">*</div>
      <div className="related-products__grid">
        <ProductsList filterId={productDetail.id} />
      </div>
    </div>
  );
};

export default RelatedProducts;
