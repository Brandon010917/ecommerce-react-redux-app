// Styles
import "../../styles/ProductDetail/AddToCart.css";

const AddToCart = ({ addToCart, quantity, setQuantity }) => {
  return (
    <form onSubmit={addToCart} className="add-to-cart ">
      <label className="add-to-cart__label">Quantity:</label>
      <div className="add-to-cart__quantity">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={({ target }) => setQuantity(target.value)}
          className="add-to-cart__input"
        />
      </div>
      <div className="add-to-cart__wrapper-btn">
        <button className="add-to-cart__btn">Add to Cart</button>
      </div>
    </form>
  );
};

export default AddToCart;
