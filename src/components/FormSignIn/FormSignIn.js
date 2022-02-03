//React-hook-form
import { useForm } from "react-hook-form";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setError } from "../../redux/actions";

//React-router-dom
import { useNavigate } from "react-router-dom";

//Axios
import axios from "axios";

//Components
import Error from "../Error";

const FormSignIn = () => {
  //redux-hooks
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  //form-hooks
  const { register, handleSubmit } = useForm();

  //router-hooks
  const navigate = useNavigate();

  //Functions
  const handleUserSignIn = (user) => {
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/login/", user)
      .then(({ data }) => {
        localStorage.setItem("token", data.access);
        navigate("/");
        dispatch(setError(null));
      })
      .catch(({ response }) => dispatch(setError(response.data)));
  };

  return (
    <form
      onSubmit={handleSubmit(handleUserSignIn)}
      className="flex flex-col mb-7"
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
      <button className="bg-black text-white mt-11 p-2.5 text-sm hover:bg-opacity-90">
        Sign In
      </button>
      {error && <Error errorText={error.detail} />}
    </form>
  );
};

export default FormSignIn;
