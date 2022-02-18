//React-hook-form
import { useForm } from "react-hook-form";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Actions
import { signInUserThunk } from "../../redux/actions";
//Components
import Error from "../Custom/Error";

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
    <form onSubmit={handleSubmit(handleUserSignIn)} className="signin-form">
      <label className="signin-form__email">
        Enter your email
        <div className="signin-form__label">
          <i className="material-icons-outlined"> email </i>
          <input
            type="email"
            placeholder="john@anise.com"
            {...register("email", {
              required: {
                message: "This fiel is required",
              },
            })}
            className="signin-form__input"
            autoComplete="off"
          />
        </div>
      </label>
      <label>
        Enter your password
        <div className="signin-form__label">
          <i className="material-icons-outlined text-lg"> lock </i>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password", {
              required: {
                message: "This fiel is required",
              },
            })}
            className="signin-form__input"
          />
        </div>
      </label>
      <button className="signin-form__button">Sign In</button>
      {error && <Error errorText={error.detail} />}
    </form>
  );
};

export default FormSignIn;
