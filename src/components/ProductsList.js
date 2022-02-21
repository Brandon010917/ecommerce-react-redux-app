//Redux
import { useSelector } from "react-redux";
//Components
import ProductItem from "./ProductItem";

const ProductsList = ({ filterId }) => {
  //Redux-hooks
  const productsList = useSelector((state) => state.productsList);

  return (
    <>
      {productsList
        .filter((product) => product.id !== filterId)
        .map((product) => (
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
