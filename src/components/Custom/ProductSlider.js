import { useState } from "react";
// Styles
import "../../styles/Custom/ProductSlider.css";
// Icon
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const ProductSlider = ({ images }) => {
  const [indexImage, setIndexImage] = useState(0);
  const widthImage = 100 / images?.length;

  // Functions
  const prev = () =>
    setIndexImage((prev) => (prev === 0 ? images?.length - 1 : prev - 1));

  const next = () =>
    setIndexImage((prev) => (prev === images?.length - 1 ? 0 : prev + 1));

  return (
    <div className="slider">
      <p className="slider__info">
        {indexImage + 1} / {images?.length}
      </p>

      <div className="slider__btns">
        <button onClick={prev}>
          <MdNavigateBefore className="slider__icon slider__icon--left" />
        </button>
        <button onClick={next}>
          <MdNavigateNext className="slider__icon slider__icon--right" />
        </button>
      </div>

      <div
        className="slider__slide"
        style={{
          width: 100 * images?.length + "%",
          transform: `translateX(-${widthImage * indexImage}%)`,
        }}
      >
        {images?.map((image) => (
          <div
            key={image.id}
            style={{
              width: widthImage + "%",
            }}
          >
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
