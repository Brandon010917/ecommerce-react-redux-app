// Styles
import "../styles/Contact/Contact.css";
// Icons
import { FaInstagram, FaPinterest } from "react-icons/fa";
// Components
import Newsletter from "../components/Custom/Newsletter";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container-content">
        <div className="contact__grid">
          <div className="contact__left">
            <h2 className="contact__title">Contact</h2>
          </div>
          <div className="contact__right">
            <p className="contact__text">
              For all customer and sales inquiries, please contact:
            </p>
            <div className="contact__text">
              <p> Customer service</p>
              <p>email@example.com</p>
            </div>
            <div className="contact__text">
              <p> Wholesale inquiries</p>
              <p>email@example.com</p>
            </div>
            <div className="contact__text">
              <p> Press inquiries</p>
              <p>email@example.com</p>
            </div>

            <div className="contact__followers">
              <p>Follow us</p>

              {/* Icons */}
              <div className="contact__icons">
                <FaInstagram className="contact__icon" />
                <FaPinterest className="contact__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Contact;
