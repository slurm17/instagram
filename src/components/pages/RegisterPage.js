import React, { useState } from "react";
import "../../styles/normalize.css";
import "../../styles/estilos.css";
import "./RegisterPage.css";
import { Link, useHistory } from "react-router-dom";
import campos from "./helper/campos";
import routes from "../routes/helper/routes";
import axios from "axios";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    passwd: "",
  });

  const history = useHistory()

  async function register() {
    try {
      await axios
        .get("http://localhost:3000/users", {
          params: {
            email: newUser.email,
          },
        })
        .then((res) => {
          console.log(res);
          // if (res.data.length) throw new Error("El correo ya está registrado");
          // if (newUser.email == "") throw new Error("Debe ingresar un email");
          // if (newUser.name == "") throw new Error("Debe ingresar un nombre");
          // if (newUser.lastName == "") throw new Error("Debe ingresar un apellido");
          // if (newUser.passwd == "") throw new Error("Debe ingresar una contraseña");
        })
        .then(() => {
          axios.post("http://localhost:3000/users", {
            email: newUser.email,
            name: `${newUser.name} ${newUser.lastName}`,
            passwd: newUser.passwd,
            folowers: 0,
            folowing: 0,
            posts: 0,
            profileIMG: `https://i.imgur.com/NTmTX1P.jpeg`,
          },
          alert("registro exitoso"),
          history.push('/login')
          );
        });
    } catch (error) {
      return console.error(error);
    }
  }

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
          <input
            type="button"
            className="reg-form-boton"
            value="Registrarme"
            onClick={() => register()}
          />
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
