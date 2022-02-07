import { useState } from "react";

//React-router-dom
import { Link } from "react-router-dom";

const ProductItem = ({ name, id, price, images }) => {
  const [changeImage, setChangeImage] = useState(false);

  return (
    <Link
      to={`/shop/product/${id}`}
      className="flex flex-col items-center text-center cursor-pointer transition-all"
      onMouseOver={() => setChangeImage(true)}
      onMouseOut={() => setChangeImage(false)}
    >
      <div className="relative">
        <img src={images[0].url} alt={name} className="" />
        <img
          src={images[1].url}
          alt={name}
          className={`absolute left-0 right-0 top-0 bottom-0 transition-all duration-500 ${
            changeImage ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="mt-2.5 md:mt-3 text-sm">
        <p className="font-light">{name}</p>
        <p className="mt-2">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
