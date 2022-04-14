import { useEffect } from "react";
// Styles
import "../styles/Cart/Cart.css";
// React-redux
import { useDispatch, useSelector } from "react-redux";
// React-router-dom
import { Link } from "react-router-dom";
// Actions
import { getOrdersThunk } from "../redux/actions/orders.actions";
// Components
import CartProduct from "../components/Cart/CartProduct";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  return (
    <div className="cart">
      <div className="container-content">
        <h2 className="cart__title">MY ORDERS</h2>

        {orders.length > 0 ? (
          <>
            <div className="cart__table">
              <div className="cart__table-header">
                <p className="cart__column-one">ITEM</p>
                <p className="cart__column-two">QUANTITY</p>
                <p className="cart__column-three">PRICE</p>
              </div>

              {/* Render products */}
              {orders.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
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

export default MyOrders;
