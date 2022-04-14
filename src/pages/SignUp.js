//Styles
import "../App.css";
import "../styles/SignUp/SignUp.css";
//Video background
import backgroundVideoSignUp from "../assets/images/background-video.mp4";
//React-router-dom
import { Link } from "react-router-dom";
//Components
import FormSignUp from "../components/FormSignUp/FormSignUp";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__card">
        <h1 className="signup__title">Anise</h1>

        {/* Form */}
        <FormSignUp />

        <p className="signup__signin">
          <span>Already have an account? </span>
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
      <video
        src={backgroundVideoSignUp}
        className="background-video"
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
    </div>
  );
};

export default SignUp;
