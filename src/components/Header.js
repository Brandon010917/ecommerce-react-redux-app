import { useEffect, useState } from "react";

//React-router-dom
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

//Components
import LinkPages from "./LinkPages";

const Header = () => {
  //State
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //Redux-hooks
  const cart = useSelector((state) => state.cart);

  //Effect
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
    cart.map((product) => product.quantity).reduce((prev, curr) => prev + curr);

  return (
    <header
      className={`${
        isOpenNav ? "min-h-screen flex flex-col" : "relative"
      } container-content container-header font-literation`}
    >
      <div className="flex justify-between items-center">
        {/* Button hambunger */}
        <div className="md:hidden">
          <button
            className={`hamburger hamburger--collapse ${
              isOpenNav && "is-active"
            }`}
            onClick={() => setIsOpenNav((prevValue) => !prevValue)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        {/* Icons */}
        <div className="text-gray-600 hidden md:flex gap-4">
          <i className="fab fa-instagram text-xl cursor-pointer"></i>
          <i className="fab fa-pinterest text-xl cursor-pointer"></i>
        </div>
        {/* Title */}
        <div className="animate__animated animate__fadeIn animate__slower w-1/2 flex flex-col items-center">
          <h1 className="font-teimer text-4xl">Anise</h1>
          <div className="hidden md:block font-literation">
            <LinkPages />
          </div>
        </div>

        {/* Cart */}
        <div className="relative left-2 ml-6 p-1">
          <button>
            <Link to="/cart">
              <i className="fas fa-shopping-cart text-gray-600"></i>
            </Link>
          </button>
          <span className="absolute -top-2.5 -right-0.5 p-1 text-xs">
            {totalProducts || 0}
          </span>
        </div>
      </div>
      {/* Navbar Mobile */}
      <div
        className={`${
          isOpenNav ? "flex flex-col flex-grow" : "hidden"
        } md:hidden bg-white pt-10`}
      >
        <ul className="animate__animated animate__fadeInUp flex-grow flex flex-col justify-center items-center">
          <li className="nav-link-mobile hover:opacity-70">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-link-mobile hover:opacity-70">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link-mobile hover:opacity-70">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-link-mobile hover:opacity-70">
            <Link to="/journal">Journal</Link>
          </li>
        </ul>
        <div className="animate__animated animate__fadeInUp animate__delay-1s text-center">
          <i className="fab fa-instagram my-4 mx-2 text-2xl cursor-pointer"></i>
          <i className="fab fa-pinterest my-4 mx-2 text-2xl cursor-pointer"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
