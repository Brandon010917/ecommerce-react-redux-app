//Video background
import { backgroundVideoLogin } from "../assets/images";

//React-router-dom
import { Link } from "react-router-dom";

//React-hook-form
import { useForm } from "react-hook-form";

const Login = () => {
  //form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Functions
  const handleUserLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="text-neutral-700 min-h-screen flex justify-center items-center p-4">
      <div className="card-login bg-white bg-opacity-90 w-full mx-auto p-7 flex flex-col rounded-2xl">
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
        <form
          onSubmit={handleSubmit(handleUserLogin)}
          className="flex flex-col"
        >
          <label className="mb-5">
            Enter your email
            <div className="bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10">
              <i className="material-icons-outlined text-lg"> email </i>
              <input
                type="email"
                placeholder="john@anise.com"
                {...register("email", {
                  required: {
                    message: "This fiel is required",
                  },
                })}
                className="outline-none"
                autoComplete="off"
              />
            </div>
          </label>
          <label>
            Enter your password
            <div className="bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10">
              <i className="material-icons-outlined text-lg"> lock </i>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: {
                    message: "This fiel is required",
                  },
                })}
                className="outline-none"
              />
            </div>
          </label>
          <button className="bg-black text-white mt-11 mb-7 p-2.5 text-sm hover:bg-opacity-90">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
      <video
        src={backgroundVideoLogin}
        className="fixed min-h-screen top-0 bottom-0 left-0 right-0 object-cover -z-10"
        muted
        autoPlay="autoplay"
        preload="auto"
        loop
      ></video>
    </div>
  );
};

export default Login;
