import React from "react";
import '../../styles/normalize.css'
import '../../styles/estilos.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <body className="body-registro">
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
          />
          <input
            type="text"
            className="reg-form-nombre reg-input"
            placeholder="nombre completo"
          />
          <input
            type="text"
            className="reg-form-nombre reg-input"
            placeholder="nombre completo"
          />
          <input
            type="text"
            className="reg-form-usuario reg-input"
            placeholder="nombre de usuario"
          />
          <input
            type="password"
            className="reg-form-passwd reg-input"
            placeholder="contraseña"
          />
          <input type="submit" className="reg-form-boton" value="Registrarme" />
          <label className="ntc">¿Tienes una cuenta?</label>
          <Link className="reg" to="/login">
            Inicia sesión
          </Link>
        </form>
      </div>
      <script src="codigo.js"></script>
    </body>
  );
};

export default RegisterPage;
