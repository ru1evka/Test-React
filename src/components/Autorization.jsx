import { Link } from "react-router-dom";
import "../sass/autorization.scss";

function Autorization({
  register,
  handleSubmit,
  onSubmit,
  errors,
  login,
  pass,
}) {
  return (
    <div className="wrapperAutorization">
      <p>Autorization</p>

      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          login
          <input
            {...register("login", {
              required: "Вы ввели не верный логин",
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors?.login && <span>{errors?.login?.message || "Error!"}</span>}
        </div>
        <label>
          password
          <input
            {...register("password", {
              required: "Введите пароль",
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors?.password && (
            <span>{errors?.password?.message || "Error!"}</span>
          )}
        </div>
        <div className="btnFlex">
          <button className="btnSubForm">
            <Link
              to={login == "admin" && pass == "test1234" ? "/content" : "/"}
            >
              Submit
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Autorization;
