// Styles
import "../../styles/Cart/CartProduct.css";

const CartProduct = ({
  product,
  deleteProductCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  return (
    <>
      {product && (
        <div key={product.id} className="cart-product__grid">
          <div className="cart-product__column-one">
            {increaseQuantity && (
              <div className="cart-product__column-one-left">
                <button
                  className="cart-product__column-one-btn"
                  onClick={() => deleteProductCart(product.id)}
                >
                  X
                </button>
              </div>
            )}

            <div className="cart-product__column-one-mid">
              <img
                src={product.product.images[0].url}
                alt={product.product.name}
              />
            </div>
            <div className="cart-product__column-one-right">
              {product.product.name}
            </div>
          </div>
          <div className="cart-product__column-two">
            {decreaseQuantity && (
              <button
                onClick={() => decreaseQuantity(product.id, product.quantity)}
                className="cart-product__decrement-btn"
              >
                -
              </button>
            )}

            <p
              className={`cart-product__quantity ${
                increaseQuantity ? "cart-product__quantity--border" : ""
              }`}
            >
              {product.quantity}
            </p>
            {increaseQuantity && (
              <button
                onClick={() => increaseQuantity(product.id, product.quantity)}
                className="cart-product__increment-btn"
              >
                +
              </button>
            )}
          </div>
          <div className="cart-product__column-three">
            ${product.product.price * product.quantity}.00
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
