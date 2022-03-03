// Styles
import "../../styles/Home/GalleryTop.css";
//  Images
import Image1 from "../../assets/images/image-gallery-1.jpg";
import Image2 from "../../assets/images/image-gallery-2.jpg";

const GalleryTop = () => {
  return (
    <div className="gallery-top">
      <div className="container-content gallery-top__grid">
        <img
          src={Image1}
          alt="gallery-1"
          className="gallery-top__image animate__animated animate__fadeIn"
        />
        <img
          src={Image2}
          alt="gallery-2"
          className="gallery-top__image animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

export default GalleryTop;
