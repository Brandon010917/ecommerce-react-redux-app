// Icons
import {
  MdPersonOutline,
  MdWarningAmber,
  MdOutlineEmail,
  MdLockOutline,
} from "react-icons/md";
// React-hook-form
import { useForm } from "react-hook-form";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { signUpUserThunk } from "../../redux/actions";
// Components
import Error from "../Custom/Error";

const FormSignUp = () => {
  // redux-hooks
  const { error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // form-hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Functions
  const handleUserSignUp = (user) => {
    dispatch(signUpUserThunk(user));
  };

  return (
    <form onSubmit={handleSubmit(handleUserSignUp)} className="signup-form">
      <div className="signup-form__user">
        {/* First Name */}
        <label>
          First name
          <div className="signup-form__label">
            <MdPersonOutline className="signup-form__icon" />
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
              className="signup-form__input"
              autoComplete="off"
            />
          </div>
          {errors.first_name && (
            <p className="signup-form__error">
              <MdWarningAmber />
              <span> {errors.first_name.message}</span>
            </p>
          )}
        </label>

        {/* Last Name */}
        <label>
          Last name
          <div className="signup-form__label">
            <MdPersonOutline className="signup-form__icon" />
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
              className="signup-form__input"
              autoComplete="off"
            />
          </div>
          {errors.last_name && (
            <p className="signup-form__error">
              <MdWarningAmber />
              <span> {errors.last_name.message}</span>
            </p>
          )}
        </label>
      </div>

      <label className="signup-form__email">
        Email
        <div className="signup-form__label">
          <MdOutlineEmail className="signup-form__icon" />
          <input
            type="email"
            placeholder="john@anise.com"
            {...register("email", {
              required: {
                value: true,
                message: "This fiel is required",
              },
            })}
            className="signup-form__input"
            autoComplete="off"
          />
        </div>
      </label>
      <label>
        Password
        <div className="signup-form__label">
          <MdLockOutline className="signup-form__icon" />
          <input
            type="password"
            placeholder="????????????????????????"
            {...register("password", {
              required: {
                value: true,
                message: "This fiel is required",
              },
            })}
            className="signup-form__input"
          />
        </div>
      </label>
      <button className="signup-form__button">Sign Up</button>
      {error && <Error errorText={"There is already a user with this email"} />}
    </form>
  );
};

export default FormSignUp;
