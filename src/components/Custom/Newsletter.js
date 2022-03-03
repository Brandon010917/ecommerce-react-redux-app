//Styles
import "../../styles/Home/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container-content newsletter__grid">
        {/* Column left */}
        <div className="newsletter__left">
          <h3 className="newsletter__title">Newsletter</h3>
          <p>
            Be the first to know about our new collection <br /> launches,
            special offers & other updates.
          </p>
        </div>
        {/* Column right */}
        <div className="newsletter__right">
          <form className="newsletter-form">
            <div className="newsletter-form__wrapper">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-form__input"
              />
            </div>
            <div className="newsletter-form__wrapper">
              <button className="newsletter-form__button">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="newsletter__border-bottom"></div>
      </div>
    </div>
  );
};

export default Newsletter;
