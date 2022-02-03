//Video background
import backgroundVideoSignUp from "../assets/images/background-video.mp4";

//React-router-dom
import { Link } from "react-router-dom";

//Components
import FormSignUp from "../components/FormSignUp/FormSignUp";

const SignUp = () => {
  return (
    <div className="text-neutral-700 min-h-screen flex justify-center items-center p-4">
      <div className="card-signup bg-white bg-opacity-90 w-full mx-auto p-7 flex flex-col rounded-2xl">
        <h1 className="mb-5 font-teimer font-light text-4xl text-center">
          Anise
        </h1>

        {/* Form */}
        <FormSignUp />

        <p className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signin" className="underline">
            Sign In
          </Link>
        </p>
      </div>
      <video
        src={backgroundVideoSignUp}
        className="fixed min-h-screen top-0 bottom-0 left-0 right-0 object-cover -z-10"
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
    </div>
  );
};

export default SignUp;
