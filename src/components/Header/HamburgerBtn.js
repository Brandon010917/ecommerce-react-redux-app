// Styles
import "../../styles/Header/HamburgerBtn.css";

const HamburgerBtn = ({ isOpenNav, setIsOpenNav }) => {
  return (
    <div className="hamburger__wrapper">
      <button
        className={`hamburger hamburger--collapse ${
          isOpenNav ? "is-active" : ""
        }`}
        onClick={() => setIsOpenNav((prevValue) => !prevValue)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default HamburgerBtn;
