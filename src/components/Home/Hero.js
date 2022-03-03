// Styles
import "../../styles/Home/Hero.css";
// React-router-dom
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-content">
        <div className="hero__container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <strong className="hero__strong">NEW COLLECTION</strong>
              <p className="hero__span">
                <span>Universal — </span>
                <Link className="underline" to="/shop">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
