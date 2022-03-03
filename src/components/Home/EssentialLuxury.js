// Styles
import "../../styles/Home/EssentialLuxury.css";
// Images
import ImageRing1 from "../../assets/images/image-ring-1.jpg";
import ImageRing2 from "../../assets/images/image-ring-2.jpg";
// React-router-dom
import { Link } from "react-router-dom";

const EssentialLuxury = () => {
  return (
    <div className="essential-luxury">
      <div className="container-content essential-luxury__grid">
        <div className="essential-luxury__left">
          <h2 className="essential-luxury__title">Essential Luxury</h2>
          <button className="essential-luxury__button">
            <Link to="/shop">Shop Rings</Link>
          </button>
        </div>
        <div className="essential-luxury__right">
          <div className="essential-luxury__card">
            <img src={ImageRing1} alt="ring-1" />
            <p className="essential-luxury__product-name">Maggie Ring</p>
            <p>$150.00</p>
          </div>
          <div className="essential-luxury__card">
            <img src={ImageRing2} alt="ring-2" />
            <p className="essential-luxury__product-name">Katey Ring</p>
            <p>$210.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialLuxury;
