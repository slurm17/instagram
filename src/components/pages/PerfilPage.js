import React, { useContext } from "react";
import foto from "../../img/cosmo.jpg";
import '../../styles/normalize.css'
import '../../styles/estilos.css'
import './PerfilPage.css'
import UserContext from "../context/UserContext";

const PerfilPage = () => {
  const { user, logout } = useContext(UserContext)
  const src = `https://i.blogs.es/594843/chrome/450_1000.jpg`
  return (
    <>
      <div className="body-perfil">
        <div className="perf-header">
          <div className="perf-header-logo">Instagram</div>
          <div className="perf-header-buscador">
            <input
              type="text"
              className="perf-input-buscador"
              placeholder="Buscar"
            />
          </div>
          <div className="perf-header-iconos">
            <div className="perf-icon home">H</div>
            <div className="perf-icon direct">D</div>
            <div className="perf-icon explore">E</div>
            <button className="perf-icon activity" onClick={() => logout()}>A</button>
            <div className="perf-icon perfil">P</div>
          </div>
        </div>
        <div className="perf-container">
          <div className="perf-info">
            <div className="perf-info-foto">
              <button className="btn"><img className="perf-info-foto-img" src={user.profileIMG} alt="" /></button>
            </div>
            <div className="perf-info-datos">
              <div className="perf-info-datos-gral">
                <h1 className="perf-info-datos-gral-nomUser">{user.name}</h1>
                <button className="btn perf-info-datos-gral-editarPerfil">
                  Editar perfil
                </button>
                <button className="btn perf-info-datos-gral-config">C</button>
              </div>
              <ul className="perf-info-datos-list">
                <li className="perf-info-datos-list-publicaciones">
                  3 publicaciones
                </li>
                <li className="perf-info-datos-list-seguidores">{user.folowers} seguidores</li>
                <li className="perf-info-datos-list-seguidos">{user.folowing} seguidos</li>
              </ul>
            </div>
          </div>
          <div className="posteos">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
