import { useEffect, useState } from "react";
// Styles
import "../../styles/Header/Header.css";
// Icons
import { FaInstagram, FaPinterest, FaShoppingCart } from "react-icons/fa";
// React-router-dom
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { getCartThunk } from "../../redux/actions";
// Components
import LinkPages from "./LinkPages";
import HamburgerBtn from "./HamburgerBtn";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  // State
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // Redux-hooks
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWidth);

    if (isOpenNav) {
      document.body.style.maxHeight = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style = "";
    }

    return () => {
      document.removeEventListener("resize", handleWidth);
    };
  }, [isOpenNav]);

  useEffect(() => {
    if (width >= 768) {
      setIsOpenNav(false);
    }
  }, [width]);

  const totalProducts =
    cart.length > 0 &&
    cart
      .map((product) => product.quantity)
      .reduce((prev, curr) => prev + curr, 0);

  return (
    <header className="header">
      <div
        className={`container-content ${isOpenNav ? "open-nav" : "close-nav"}`}
      >
        <div className="header__wrapper">
          {/* Button hambunger */}
          <HamburgerBtn isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />

          {/* Icons */}
          <div className="header__icons">
            <FaInstagram className="header__icon" />
            <FaPinterest className="header__icon" />
          </div>
          {/* Title */}
          <div className="animate__animated animate__fadeIn animate__slower header__info">
            <h1 className="header__title">
              <Link to="/">Anise</Link>
            </h1>
            <div className="header__pages">
              <LinkPages />
            </div>
          </div>
          {/* Cart */}
          <div className="header__cart">
            <button>
              <Link to="/cart">
                <FaShoppingCart className="header__cart-icon" />
              </Link>
            </button>
            <span className="header__cart-number">{totalProducts || 0}</span>
          </div>
        </div>
        {/* Navbar Mobile */}
        <NavbarMobile isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
      </div>
    </header>
  );
};

export default Header;
