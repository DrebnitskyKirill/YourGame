import React from "react";
import { logUserAC } from "../../redux/actionCreators/userLogAC";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logUser = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    //console.log(data)

    fetch("http://localhost:4000/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(logUserAC(data)))
        console.log(data)
      navigation("/")
  }

    

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={logUser}>
          <input id="email" type="text" placeholder="электронная почта" className="validate" />
          <input id="password" type="password" placeholder="пароль"  className="validate" />

          <button
            type="submit"
            className="waves-effect waves-light btn-large brown lighten-2"
          >
            Авторизоваться<i className="material-icons left"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormLogin;
