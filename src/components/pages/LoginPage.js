import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { emailExistente, passwdCoincide } from "../../services/login";
import "../../styles/estilo.css";
import UserContext from "../context/UserContext";
import Error from "../messages/Error";
import campos from "./helper/campos";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [mgeError, setMgeError] = useState("Error");
  const [error, setError] = useState(false);

  const handleOnChange = (e, campo) => {
    switch (campo) {
      case "email":
        setEmail(e.target.value);
        break;
      case "passwd":
        setPasswd(e.target.value);
      default:
        break;
    }
  };

  const control = async () =>{
    try {
      await emailExistente(email)
          .then(async (result) => {
            await passwdCoincide(result, passwd);
            login(result.data[0]);
          })
    } catch (error) {
      setError(true);
      setMgeError(error.mensaje);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return console.error(error.mensaje);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sumbit");
  };

  return (
    <main className="login">
      <div className="log-container">
        <div className="log-titulo">
          <h1>Instagram</h1>
        </div>
        <form className="log-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form__input form__input--gray"
            placeholder="correo electrónico"
            onChange={(e) => handleOnChange(e, campos.email)}
          />
          <input
            type="password"
            className="form__input form__input--gray"
            placeholder="contraseña"
            onChange={(e) => handleOnChange(e, campos.passwd)}
          />
          <input
            type="button"
            className="form__input form__input--blue"
            value="Iniciar sesión"
            onClick={control}
          />
          {error && <Error mensaje={mgeError}></Error>}
          <p>
            ¿No tienes cuenta?
            <Link className="reg" to="/register">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
