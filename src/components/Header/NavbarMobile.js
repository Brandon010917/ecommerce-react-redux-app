// Styles
import "../../styles/Header/NavbarMobile.css";
// Icons
import { FaInstagram, FaPinterest } from "react-icons/fa";
// React-router-dom
import { Link } from "react-router-dom";

const NavbarMobile = ({ isOpenNav, setIsOpenNav }) => {
  const pages = ["shop", "contact", "orders"];

  return (
    <div
      className={`navbar-mobile ${
        isOpenNav ? "navbar-mobile--active" : "navbar-mobile--hidden"
      }`}
    >
      <ul className="animate__animated animate__fadeInUp navbar-mobile__list">
        {pages.map((page) => (
          <li key={page} className="navbar-mobile__list-item">
            <Link to={`/${page}`} onClick={() => setIsOpenNav(false)}>
              {page === "orders" ? `my ${page}` : page}
            </Link>
          </li>
        ))}
      </ul>
      <div className="animate__animated animate__fadeInUp animate__delay-1s navbar-mobile__icons">
        <FaInstagram className="navbar-mobile__icon" />
        <FaPinterest className="navbar-mobile__icon" />
      </div>
    </div>
  );
};

export default NavbarMobile;
