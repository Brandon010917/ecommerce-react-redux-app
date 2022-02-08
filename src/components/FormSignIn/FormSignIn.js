//React-hook-form
import { useForm } from "react-hook-form";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Actions
import { signInUserThunk } from "../../redux/actions";

//Components
import Error from "../Error";

const FormSignIn = () => {
  //redux-hooks
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  //form-hooks
  const { register, handleSubmit } = useForm();

  //Functions
  const handleUserSignIn = (user) => {
    dispatch(signInUserThunk(user));
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
