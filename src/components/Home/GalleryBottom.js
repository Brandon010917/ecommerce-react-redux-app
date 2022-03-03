// Styles
import "../../styles/Home/GalleryBottom.css";
// Images
import Image3 from "../../assets/images/image-gallery-3.jpg";
import Image4 from "../../assets/images/image-gallery-4.jpg";
import Image5 from "../../assets/images/image-gallery-5.jpg";
import Image6 from "../../assets/images/image-gallery-6.jpg";

const GalleryBottom = () => {
  return (
    <div className="gallery-bottom">
      <div className="container-content gallery-bottom__grid">
        <img src={Image3} alt="gallery-3" className="gallery-bottom__image" />
        <img src={Image4} alt="gallery-4" className="gallery-bottom__image" />
        <img src={Image5} alt="gallery-5" className="gallery-bottom__image" />
        <img src={Image6} alt="gallery-6" className="gallery-bottom__image" />
      </div>
    </div>
  );
};

export default GalleryBottom;
