// Styles
import "../../styles/Footer/Footer.css";
// React-router-dom
import { Link } from "react-router-dom";

const Footer = () => {
  const pages = ["shop", "contact"];
  const socialMedia = ["instagram", "pinterest", "journal"];

  return (
    <footer className="footer">
      <div className="container-content footer__grid">
        <div className="footer__grid-left">
          <div className="footer__columns-left">*</div>
          <div className="footer__columns-left">Anise</div>
        </div>

        <div className="footer__grid-right">
          <div className="footer__columns-right"></div>

          <div className="footer__columns-right footer__columns-right--padding">
            <ul>
              {pages.map((page) => (
                <li key={page} className="footer__list-item">
                  <Link to={`/${page}`} className="">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__columns-right footer__columns-right--padding">
            <ul>
              {socialMedia.map((social) => (
                <li key={social} className="footer__list-item">
                  {social}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
