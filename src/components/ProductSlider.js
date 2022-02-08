import { useEffect } from "react";
import { useState } from "react";

const SliderProduct = ({ images }) => {
  const [indexImage, setIndexImage] = useState(0);
  const widthImage = 100 / images.length;

  useEffect(() => {}, []);

  //Functions
  const prev = () =>
    setIndexImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setIndexImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="slider-container overflow-hidden relative">
      <p className="text-gray-800 absolute top-4 right-4 z-30 text-xs">
        {indexImage + 1} / {images.length}
      </p>

      <div className="flex justify-between gap-2 absolute top-0 bottom-0 left-0 right-0 z-30">
        <button onClick={prev}>
          <span className="material-icons-outlined">navigate_before</span>
        </button>
        <button onClick={next}>
          <span className="material-icons-outlined">navigate_next</span>
        </button>
      </div>

      <div
        className="slider-slide flex transition-all duration-1000"
        style={{
          width: 100 * images.length + "%",
          transform: `translateX(-${widthImage * indexImage}%)`,
        }}
      >
        {images.map((image) => (
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

export default SliderProduct;
