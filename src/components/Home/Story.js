// Images
import "../../styles/Home/Story.css";
// React-router-dom
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="story">
      <div className="container-content">
        <div className="story__wrapper">
          <div className="story__details">
            <p className="story__description">
              We create modern gold and sterling silver jewelry with a focus on
              timeless designs, local production, and responsibly sourced
              materials.
            </p>
            <button className="story__button">
              <Link to="/about">Our Story</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
