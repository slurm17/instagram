import React, { useEffect, useState } from "react";
import "../../styles/estilo.css";
import { Link, useHistory } from "react-router-dom";
import campos from "./helper/campos";
import routes from "../routes/helper/routes";
import {
  validar,
  resetCampos,
  valido,
  emailYaRegistrado
} from "../../functions/validar";
import { emailExist, postUser } from "../../services/registro";
import Error from "../messages/Error";

const RegisterPage = () => {
  const history = useHistory();
  const [mgeError, setMgeError] = useState("Error");
  const [error, setError] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    passwd: "",
  });

  useEffect(() => {
    resetCampos();
    return () => {
      resetCampos();
    };
  }, []);

  const control = (e, campo) => {
    validar(e, campo);
    if (valido) {
      document.getElementById("form__input-button").removeAttribute("disabled");
    } else {
      document
        .getElementById("form__input-button")
        .setAttribute("disabled", "");
    }
  };

  const handleOnChange = (e, campo) => {
    setNewUser({
      ...newUser,
      [campo]: e.target.value,
    });
  };

  async function register(e) {
    e.preventDefault();
    try {
      await emailExist(newUser.email).then(() => {
        postUser(newUser);
        history.push("/login");
        alert("registro exitoso");
      });
    } catch (error) {
      emailYaRegistrado();
      setError(true);
      setMgeError(error.mensaje);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }

  return (
    <main className="register">
      <div className="reg-container">
        <div className="reg-titulo">
          <h1>Instagram</h1>
          <h3>Registrate para ver fotos y videos de tus amigos</h3>
        </div>
        <form onSubmit={(e) => register(e)} className="reg-form">
          <input
            type="text"
            id="reg-email"
            className="form__input form__input--gray"
            placeholder="correo electrónico"
            value={newUser.email}
            required
            onChange={(e) => handleOnChange(e, "email")}
            onKeyUp={(e) => control(e, "email")}
            onBlur={(e) => control(e, "email")}
          />
          <input
            type="text"
            id="reg-name"
            className="form__input form__input--gray"
            placeholder="nombre/s"
            value={newUser.name}
            required
            autoComplete="off"
            onChange={(e) => handleOnChange(e, "name")}
            onKeyUp={(e) => control(e, "name")}
            onBlur={(e) => control(e, "name")}
          />
          <input
            type="text"
            id="reg-lastName"
            className="form__input form__input--gray"
            placeholder="apellido/s"
            value={newUser.lastName}
            required
            autoComplete="off"
            onChange={(e) => handleOnChange(e, "lastName")}
            onKeyUp={(e) => control(e, "lastName")}
            onBlur={(e) => control(e, "lastName")}
          />
          <input
            type="password"
            id="reg-passwd"
            className="form__input form__input--gray"
            placeholder="contraseña"
            value={newUser.passwd}
            required
            onChange={(e) => handleOnChange(e, campos.passwd)}
            onKeyUp={(e) => control(e, "passwd")}
            onBlur={(e) => control(e, "passwd")}
          />
          <input
            type="submit"
            id="form__input-button"
            className="form__input form__input--blue "
            value="Registrarse"
            disabled
          />
          {error && <Error mensaje={mgeError}></Error>}
          <p>
            ¿Tienes una cuenta?
            <Link className="reg" to={routes.login}>
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
      <script src="codigo.js"></script>
    </main>
  );
};

export default RegisterPage;

