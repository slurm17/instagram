import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import "../../styles/estilo.css";

const NavPage = () => {
  const { logout } = useContext(UserContext);
  const src = `https://i.blogs.es/594843/chrome/450_1000.jpg`;

  return (
    <nav>
      <div className="nav-logo">Instagram</div>
      <div className="nav-buscador">
        <input type="text" className="buscador" placeholder="Buscar" />
      </div>
      <div className="nav-iconos">
          <div className="home">H</div>
          <div className="direct">D</div>
          <div className="explore">E</div>
          <button className="activity" onClick={() => logout()}>
            A
          </button>
          <div className="perfil">P</div>
      </div>
    </nav>
  );
};

export default NavPage;
