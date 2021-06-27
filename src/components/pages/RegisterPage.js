import React, { useState } from "react";
import "../../styles/normalize.css";
import "../../styles/estilos.css";
import './RegisterPage.css'
import { Link } from "react-router-dom";
import campos from "./helper/campos";
import routes from "../routes/helper/routes";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    passwd: "",
  });

  const register = () => {};

  const handleOnChange = (event, campo) => {
    setNewUser({
      ...newUser,
      [campo]: event.target.value,
    });
  };

  return (
    <div className="body-registro">
      <div className="reg-container">
        <div className="reg-titulo">
          <h1>Instagram</h1>
          <h3>Registrate para ver fotos y videos de tus amigos</h3>
        </div>
        <form className="reg-form">
          <input
            type="text"
            className="reg-form-email reg-input"
            placeholder="correo electrónico"
            onChange={(e) => handleOnChange(e, "email")}
          />
          <input
            type="text"
            className="reg-form-nombre reg-input"
            placeholder="nombre/s"
            onChange={(e) => handleOnChange(e, "name")}
          />
          <input
            type="text"
            className="reg-form-nombre reg-input"
            placeholder="apellido/s"
            onChange={(e) => handleOnChange(e, "lastName")}
          />
          {/* <input
            type="text"
            className="reg-form-usuario reg-input"
            placeholder="nombre de usuario"
            onChange={(e)=>handleOnChange(e,'nameUser')}
          /> */}
          <div>
            <input
              type="password"
              className="reg-form-passwd reg-input"
              placeholder="contraseña"
              onChange={(e) => handleOnChange(e, campos.passwd)}
            />
            <button>V</button>
          </div>
          <input type="button" className="reg-form-boton" value="Registrarme" />
          <label className="ntc">¿Tienes una cuenta?</label>
          <Link className="reg" to={routes.login}>
            Inicia sesión
          </Link>
        </form>
      </div>
      <script src="codigo.js"></script>
    </div>
  );
};

export default RegisterPage;
