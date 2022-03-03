import { useEffect } from "react";
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
      .reduce((prev, curr) => prev + curr);

  const checkout = () => {
    dispatch(checkoutThunk(cart));
  };

  return (
    <div className="font-literation">
      <div className="cart container-content">
        <h2 className="mb-7 font-teimer text-2xl">SHOPPING CART</h2>

        {cart.length > 0 ? (
          <>
            <div className="border-b border-gray-500 border-opacity-20 mb-10">
              <div className="grid grid-cols-5 items-center pb-2.5 text-gray-500 text-opacity-80 border-b text-sm">
                <p className="col-span-3">ITEM</p>
                <p className="col-span-1 text-center">QUANTITY</p>
                <p className="col-span-1 text-right">PRICE</p>
              </div>

              {/* Render products */}
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-5 items-center py-5"
                >
                  <div className="col-span-3 grid grid-cols-8 items-center">
                    <div className="col-span-1 text-gray-500 text-opacity-80">
                      <button onClick={() => deleteProductCart(product.id)}>
                        X
                      </button>
                    </div>
                    <div className="col-span-1">
                      <img
                        src={product.product.images[0].url}
                        alt={product.product.name}
                      />
                    </div>
                    <div className="col-span-6 pl-4">
                      {product.product.name}
                    </div>
                  </div>
                  <div className="col-span-1 text-center mx-auto flex">
                    <button
                      onClick={() =>
                        decreaseQuantity(product.id, product.quantity)
                      }
                      className="px-2.5 py-1"
                    >
                      -
                    </button>
                    <p className="px-2.5 py-1 border">{product.quantity}</p>
                    <button
                      onClick={() =>
                        increaseQuantity(product.id, product.quantity)
                      }
                      className="px-2.5 py-1"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-1 text-right">
                    ${product.product.price * product.quantity}.00
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end items-center gap-2.5">
              <p>Total</p>
              <p>${totalToPay}.00</p>
            </div>

            <div className="text-right my-10">
              <button
                onClick={checkout}
                className="border-2 bg-gray-400 bg-opacity-5 border-gray-500 text-gray-700 font-bold py-4 px-8 font-sans tracking-wider text-sm transition-colors"
              >
                CHECKOUT
              </button>
            </div>
          </>
        ) : (
          <div>
            <p className="text-gray-500">
              You have nothing in your shopping cart.
            </p>
            <button className="border-2 border-black text-gray-500 py-2.5 px-4 mt-8 font-sans hover:bg-black hover:text-white transition-colors">
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
