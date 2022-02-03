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

const FormSignUp = () => {
  //redux-hooks
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  //form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //router-hooks
  const navigate = useNavigate();

  //Functions
  const handleUserSignUp = (user) => {
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/users/", user)
      .then(() => {
        navigate("/signin");
        dispatch(setError(null));
      })
      .catch(({ response }) => dispatch(setError(response.data)));
  };

  return (
    <form
      onSubmit={handleSubmit(handleUserSignUp)}
      className="flex flex-col mb-7"
    >
      <div className="flex">
        <label className="w-1/2 mb-5 pr-2">
          First name
          <div
            className={`bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10 ${
              errors.first_name?.message && "border-red-600"
            }`}
          >
            <i className="material-icons-outlined text-lg"> person_outline </i>
            <input
              type="text"
              placeholder="John"
              {...register("first_name", {
                required: {
                  value: true,
                  message: "This fiel is required",
                },
                pattern: {
                  value: /^[a-zA-Z\s]{2,30}$/,
                  message: "Only letters are allowed",
                },
              })}
              className="w-full outline-none"
              autoComplete="off"
            />
          </div>
          {errors.first_name && (
            <p className="text-red-600 flex items-center gap-1 mt-1 text-sm">
              <i className="material-icons-outlined text-sm"> warning </i>
              <span> {errors.first_name.message}</span>
            </p>
          )}
        </label>

        <label className="w-1/2 mb-5 pl-2">
          Last name
          <div className="bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10">
            <i className="material-icons-outlined text-lg"> person_outline </i>
            <input
              type="text"
              placeholder="Doe"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "This fiel is required",
                },
                pattern: {
                  value: /^[a-zA-Z\s]{2,30}$/,
                  message: "Only letters are allowed",
                },
              })}
              className="w-full outline-none"
              autoComplete="off"
            />
          </div>
          {errors.last_name && (
            <p className="text-red-600 flex items-center gap-1 mt-1 text-sm">
              <i className="material-icons-outlined text-sm"> warning </i>
              <span> {errors.last_name.message}</span>
            </p>
          )}
        </label>
      </div>

      <label className="mb-5">
        Email
        <div className="bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10">
          <i className="material-icons-outlined text-lg"> email </i>
          <input
            type="email"
            placeholder="john@anise.com"
            {...register("email", {
              required: {
                value: true,
                message: "This fiel is required",
              },
            })}
            className="outline-none"
            autoComplete="off"
          />
        </div>
      </label>
      <label>
        Password
        <div className="bg-white flex items-center gap-2 mt-2.5 p-2.5 border border-white border-opacity-10">
          <i className="material-icons-outlined text-lg"> lock </i>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: {
                value: true,
                message: "This fiel is required",
              },
            })}
            className="outline-none"
          />
        </div>
      </label>
      <button className="bg-black text-white mt-11 p-2.5 text-sm hover:bg-opacity-90">
        Sign Up
      </button>
      {error && <Error errorText={"There is already a user with this email"} />}
    </form>
  );
};

export default FormSignUp;
