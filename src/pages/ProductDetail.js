import { useEffect, useState } from "react";
// Styles
import "../styles/ProductDetail/ProductDetail.css";
// React-router-dom
import { useParams } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import {
  addToCartThunk,
  filterByCategoryThunk,
  getProductDetailThunk,
  resetProductDetail,
  resetProductsList,
} from "../redux/actions";
// Components
import ProductSlider from "../components/Custom/ProductSlider";
import AddToCart from "../components/ProductDetail/AddToCart";
import RelatedProducts from "../components/ProductDetail/RelatedProducts";

const ProductDetail = () => {
  // State
  const [quantity, setQuantity] = useState(1);

  // Router-hooks
  const { id } = useParams();

  // Redux-hooks
  const { productDetail } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getProductDetailThunk(id));
    setQuantity(1);

    // cleanup
    return () => {
      dispatch(resetProductDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetail) {
      dispatch(filterByCategoryThunk(productDetail.category.id));
    }

    // cleanup
    return () => {
      dispatch(resetProductsList());
    };
  }, [dispatch, productDetail]);

  // Functions
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
        <div className="product-detail">
          <div className="container-content">
            <div className="product-detail__grid">
              {/* Column left */}
              <div className="product-detail__left">
                <ProductSlider images={productDetail.images} />
              </div>

              {/* Column right */}
              <div className="product-detail__right">
                <h2 className="product-detail__name">{productDetail.name}</h2>
                <p className="product-detail__price">${productDetail.price}</p>
                <p className="product-detail__description mb-12 text-sm">
                  {productDetail.description}
                </p>
                {/* Form add product to cart */}
                <AddToCart
                  addToCart={addToCart}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
            </div>

            {/* Related products */}
            <RelatedProducts productDetail={productDetail} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
