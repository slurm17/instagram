import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/estilo.css";
import UserContext from "../context/UserContext";
import campos from "./helper/campos";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

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

  const handleSubmit = () => {
    console.log("sumbit");
  };

  return (
    <main className="login">
      <div className="log-container">
        <div className="log-titulo">
          <h1>Instagram</h1>
        </div>
        <form className="log-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="user"
            placeholder="correo electrónico"
            onChange={(e) => handleOnChange(e, campos.email)}
          />
          <input
            type="password"
            className="passwd"
            placeholder="contraseña"
            onChange={(e) => handleOnChange(e, campos.passwd)}
          />
          <input
            type="button"
            className="log-boton"
            value="Iniciar sesión"
            onClick={() => login(email, passwd)}
          />
          <label className="ntc">¿No tienes cuenta?</label>
          <Link className="reg" to="/register">
            Regístrate
          </Link>
          {/* <Link to="/profile">perfil</Link> */}
        </form>
        {/* <div>
            <h5>Error</h5>
          </div> */}
      </div>
    </main>
  );
};

export default LoginPage;
