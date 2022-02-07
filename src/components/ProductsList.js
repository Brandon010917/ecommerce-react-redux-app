//Redux
import { useSelector } from "react-redux";

//Components
import ProductItem from "./ProductItem";

const ProductsList = () => {
  //Redux-hooks
  const productsList = useSelector((state) => state.productsList);
  return (
    <>
      {productsList.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          images={product.images}
          id={product.id}
        ></ProductItem>
      ))}
    </>
  );
};

export default ProductsList;
