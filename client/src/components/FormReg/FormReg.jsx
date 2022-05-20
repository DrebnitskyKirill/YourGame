import React from "react";
import { useDispatch } from "react-redux";
import { addUserAC } from "../../redux/actionCreators/userAC";
import {

  useNavigate,
} from "react-router-dom";


function FormReg() {
  const dispatch = useDispatch();
  const navigation = useNavigate()

  const addUser = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password.value,
    };

    fetch("http://localhost:3002/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {



        dispatch(addUserAC(data))
        navigation("/");
      } );
 
   
    };
    return (
    <div className="container">
      <div className="container">
        <form onSubmit={addUser}>
          <input minLength="5"
          id="name" type="text" placeholder="имя" className="validate" />
          <input id="email" type="text" placeholder="электронная почта" className="validate" />
          <input id="password" placeholder="пароль" type="password" className="validate" />
          <input id="password2" placeholder="повторите пароль" type="password" className="validate" />
          <button
            type="submit"
            className="waves-effect waves-light btn-large brown lighten-2"
          >
            Зарегистрироваться<i className="material-icons left"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormReg;
