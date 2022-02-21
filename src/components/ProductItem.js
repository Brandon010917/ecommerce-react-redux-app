//Styles
import "../styles/ProductItem.css";
//React-router-dom
import { Link } from "react-router-dom";

const ProductItem = ({ name, id, price, images }) => {
  return (
    <Link to={`/shop/product/${id}`} className="product-item">
      <div className="product-item__wrapper">
        <img src={images[0].url} alt={name} className="" />
        <img src={images[1].url} alt={name} className="product-item__image" />
      </div>
      <div className="product-item__description">
        <p className="product-item__name">{name}</p>
        <p className="product-item__price">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
