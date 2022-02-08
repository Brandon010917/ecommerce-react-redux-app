import { useEffect, useState } from "react";

//React-router-dom
import { useParams } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  addToCartThunk,
  filterByCategoryThunk,
  getProductDetailThunk,
} from "../redux/actions";

//Components
import ProductsList from "../components/ProductsList";
import ProductSlider from "../components/ProductSlider";

const ProductDetail = () => {
  //State
  const [quantity, setQuantity] = useState(1);

  //Router-hooks
  const { id } = useParams();

  //Redux-hooks
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    dispatch(getProductDetailThunk(id));
    setQuantity(1);
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetail) {
      dispatch(filterByCategoryThunk(productDetail.category.id));
    }
  }, [dispatch, productDetail]);

  //Functions
  const addToCart = (e) => {
    e.preventDefault();

    const addProductToCart = {
      product: productDetail?.id,
      quantity: +quantity,
    };

    dispatch(addToCartThunk(addProductToCart));
    setQuantity(1);
  };

  return (
    <>
      {productDetail && (
        <div className="container-content font-literation">
          <div className="product-detail">
            <div className="product-detail-grid grid md:grid-cols-2">
              <div className="col-span-full md:col-span-1 mb-5">
                <ProductSlider images={productDetail?.images} />
              </div>
              <div className="col-span-full md:col-span-1 flex flex-col items-center justify-center md:pt-14 md:pl-14 lg:pl-20">
                <h2 className="mb-6 font-teimer text-xl">
                  {productDetail.name}
                </h2>
                <p className="mb-10">${productDetail.price}</p>
                <p className="mb-12 text-center text-sm">
                  {productDetail.description}
                </p>
                <form
                  onSubmit={addToCart}
                  className="flex flex-col items-center"
                >
                  <label className="text-sm mb-2">Quantity:</label>
                  <div className="w-1/2 border border-black border-opacity-70 ">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={({ target }) => setQuantity(target.value)}
                      className="p-6 w-full"
                    />
                  </div>
                  <div className="w-full mt-10 py-2 pl-1">
                    <button className="w-full block px-7 py-5 border-2 border-black hover:bg-black hover:text-white transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="col-span-full py-4 font-teimer text-2xl md:text-4xl">
                *
              </div>
              <div className="products-grid grid grid-cols-1 md:grid-cols-3">
                <ProductsList filterId={productDetail.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
