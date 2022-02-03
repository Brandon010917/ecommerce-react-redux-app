import { useEffect } from "react";
import { useState } from "react";
//Redux
import { useSelector } from "react-redux";

const Sliders = () => {
  //Redux-hooks
  const productsList = useSelector((state) => state.productsList);

  const necklaces = productsList
    .filter((product) => product.category.name === "Necklaces")
    .slice(0, 4);

  const images = necklaces.map((necklace) => necklace.images[0].url);

  //State
  const [indexImages, setIndexImages] = useState(0);
  const [showImage, setShowImage] = useState(images[indexImages]);

  //Effect
  useEffect(() => {
    if (indexImages === images.length) {
      setIndexImages(0);
    } else if (indexImages === -1) {
      setIndexImages(images.length - 1);
    }

    setShowImage(images[indexImages]);
  }, [indexImages, images]);

  //Functions
  const prev = () => setIndexImages((prevIndex) => prevIndex - 1);
  const next = () => setIndexImages((prevIndex) => prevIndex + 1);

  return (
    <div className="pl-4 pb-4 pr-0">
      <div className="flex justify-end gap-2">
        <button onClick={prev}>
          <span className="material-icons-outlined">navigate_before</span>
        </button>
        <button onClick={next}>
          <span className="material-icons-outlined">navigate_next</span>
        </button>
      </div>
      <div className="slider">
        <div className="slides">
          <img src={showImage} alt="" className="transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Sliders;
