// Styles
import "../App.css";
import "../styles/SignIn/SignIn.css";
// Video background
import backgroundVideoSignIn from "../assets/images/background-video.mp4";
// Icons
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
// React-router-dom
import { Link } from "react-router-dom";
// Components
import FormSignIn from "../components/FormSignIn/FormSignIn";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__card">
        <h1 className="signin__title">Anise</h1>
        <div className="signin-test">
          <strong className="signin-test__strong">Test data</strong>
          <p className="signin-test__info">
            <MdPersonOutline />
            admin@admin.com
          </p>
          <p className="signin-test__info">
            <MdLockOutline />
            root
          </p>
        </div>

        {/* Form */}
        <FormSignIn />

        <p className="signin__signup">
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <video
        src={backgroundVideoSignIn}
        className="background-video"
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
    </div>
  );
};

export default SignIn;
