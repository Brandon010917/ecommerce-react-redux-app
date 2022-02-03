//Video background
import backgroundVideoSignIn from "../assets/images/background-video.mp4";

//React-router-dom
import { Link } from "react-router-dom";

//Components
import FormSignIn from "../components/FormSignIn/FormSignIn";

const SignIn = () => {
  return (
    <div className="text-neutral-700 min-h-screen flex justify-center items-center p-4">
      <div className="card-signin bg-white bg-opacity-90 w-full mx-auto p-7 flex flex-col rounded-2xl">
        <h1 className="mb-5 font-teimer font-light text-4xl text-center">
          Anise
        </h1>
        <div className="bg-blue-300 bg-opacity-70 p-2.5 mb-5 rounded-lg">
          <strong className="block mb-2.5 text-center">Test data</strong>
          <p className="flex items-center gap-2 mb-2.5">
            <i className="material-icons-outlined"> person_outline </i>
            admin@admin.com
          </p>
          <p className="flex items-center gap-2 mb-2.5">
            <i className="material-icons-outlined"> lock </i>
            root
          </p>
        </div>

        {/* Form */}
        <FormSignIn />

        <p className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
      <video
        src={backgroundVideoSignIn}
        className="fixed min-h-screen top-0 bottom-0 left-0 right-0 object-cover -z-10"
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
    </div>
  );
};

export default SignIn;
