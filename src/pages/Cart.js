import { useEffect } from "react";
// Styles
import "../styles/Cart/Cart.css";
// React-router-dom
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import {
  changeQuantityProductCartThunk,
  deleteProductCartThunk,
  getCartThunk,
  checkoutThunk,
} from "../redux/actions";
import CartProduct from "../components/Cart/CartProduct";

const Cart = () => {
  // Redux-hooks
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  // Functions
  const deleteProductCart = (id) => {
    dispatch(deleteProductCartThunk(id));
  };

  const increaseQuantity = (id, quantity) => {
    const changeQuantity = {
      quantity: quantity + 1,
    };

    dispatch(changeQuantityProductCartThunk(id, changeQuantity));
  };

  const decreaseQuantity = (id, quantity) => {
    const changeQuantity = {
      quantity: quantity - 1,
    };

    if (changeQuantity.quantity === 0) {
      dispatch(deleteProductCartThunk(id));
    }

    dispatch(changeQuantityProductCartThunk(id, changeQuantity));
  };

  const totalToPay =
    cart.length > 0 &&
    cart
      .map((product) => product.quantity * product.product.price)
      .reduce((prev, curr) => prev + curr, 0);

  const checkout = () => {
    dispatch(checkoutThunk(cart));
  };

  return (
    <div className="cart">
      <div className="container-content">
        <h2 className="cart__title">SHOPPING CART</h2>

        {cart.length > 0 ? (
          <>
            <div className="cart__table">
              <div className="cart__table-header">
                <p className="cart__column-one">ITEM</p>
                <p className="cart__column-two">QUANTITY</p>
                <p className="cart__column-three">PRICE</p>
              </div>

              {/* Render products */}
              {cart.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  deleteProductCart={deleteProductCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))}
            </div>

            <div className="cart__total">
              <p>Total</p>
              <p>${totalToPay}.00</p>
            </div>

            <div className="cart__checkout">
              <button onClick={checkout} className="cart__checkout-btn">
                CHECKOUT
              </button>
            </div>
          </>
        ) : (
          <div>
            <p className="cart__continue-shopping">
              You have nothing in your shopping cart.
            </p>
            <button className="cart__shopping-btn">
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
