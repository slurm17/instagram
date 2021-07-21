import React, { useState } from "react";
import "../../styles/estilo.css";
import { Link, useHistory } from "react-router-dom";
import campos from "./helper/campos";
import routes from "../routes/helper/routes";
import emailExist from "../../services/existEmail";
import postUser from "../../services/postUser";
// import servicios from "../../services/servicios";


// const {register} = servicios();
const RegisterPage = () => {
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    passwd: "",
  });

  const validar = (e, campo) =>{
    
  }

  const handleOnChange = (e, campo) => {
    setNewUser({
      ...newUser,
      [campo]: e.target.value,
    });

    validar(e,campo)
  };

  async function register(e) {
    e.preventDefault();
    try {
      emailExist(newUser.email)
        .then((res) => {
          // console.log(res.data.length);
          if (!!res.data.length) {
            alert('email ya registrado')
            throw 'email ya registrado'
          }
          console.log("verificar()");
        })
        .then(() => {
          postUser(newUser);
          history.push("/login");
          alert("registro exitoso");
        });
    } catch (error) {
      return console.error(error);
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
            className="reg-email"
            placeholder="correo electrónico"
            value={newUser.email}
            required
            onChange={(e) => handleOnChange(e, "email")}
            onBlur={(e)=> validar(e,"email")}
          />
          <input
            type="text"
            className="reg-nombre"
            placeholder="nombre/s"
            value={newUser.name}
            required
            onChange={(e) => handleOnChange(e, "name")}
          />
          <input
            type="text"
            className="reg-apellido"
            placeholder="apellido/s"
            value={newUser.lastName}
            required
            onChange={(e) => handleOnChange(e, "lastName")}
          />
          <input

            type="password"
            className="reg-passwd"
            placeholder="contraseña"
            value={newUser.passwd}
            required
            onChange={(e) => handleOnChange(e, campos.passwd)}

          />
          <input type="submit" className="reg-boton" value="Registrarse"/>
          <label className="ntc">¿Tienes una cuenta?</label>
          <Link className="reg" to={routes.login}>
            Inicia sesión
          </Link>
        </form>
      </div>
      <script src="codigo.js"></script>
    </main>
  );
};

export default RegisterPage;
