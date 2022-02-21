//Styles
import "../../styles/EffortlessPieces.css";
//React-router-dom
import { Link } from "react-router-dom";
//Components
import ProductSlider from "../Custom/ProductSlider";

const EffortlessPieces = ({ productsList }) => {
  return (
    <div className="effortless-pieces">
      <div className="container-content effortless-pieces__wrapper">
        <div className="effortless-pieces__content">
          <h2 className="effortless-pieces__title">
            Effortless pieces, timeless style
          </h2>
          <div className="effortless-pieces__grid">
            <div className="effortless-pieces__left">
              <div>
                <p className="effortless-pieces__description">
                  We design each of our collections with the intention of
                  creating pieces that can be passed down through generations,
                  with minimal waste and minimal carbon footprint.
                </p>

                <button className="effortless-pieces__button">
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
            <div className="effortless-pieces__rigth">
              {productsList.length > 0 && (
                <>
                  <ProductSlider images={productsList[0].images} />
                  <p className="effortless-pieces__product-name">
                    {productsList[0].name}
                  </p>
                  <p className="effortless-pieces__product-price">
                    ${productsList[0].price}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortlessPieces;
