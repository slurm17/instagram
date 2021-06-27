import React, { useContext } from "react";
import foto from "../../img/cosmo.jpg";
import '../../styles/normalize.css'
import '../../styles/estilos.css'
import './PerfilPage.css'
import UserContext from "../context/UserContext";

const PerfilPage = () => {
  const { user, logout } = useContext(UserContext)
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
              <button className="btn"><img className="perf-info-foto-img" src={foto} alt="" /></button>
            </div>
            <div className="perf-info-datos">
              <div className="perf-info-datos-gral">
                <h1 className="perf-info-datos-gral-nomUser">{user.realName}</h1>
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
        </div>
        <div>
          <label className="texto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            provident enim id illum. Eos, eligendi voluptatum tempora sapiente,
            dolor, repellendus inventore suscipit fuga quasi similique unde
            ipsam expedita voluptate quisquam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Debitis voluptatem aliquid quos. Quis
            quos quod dolorum, minima eos hic totam esse perferendis libero
            corrupti sunt cupiditate distinctio repudiandae laborum nisi! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam
            maxime aut reprehenderit assumenda est saepe porro repellat pariatur
            at eos ex fuga, quod cumque non, ipsum veritatis iusto. Quis. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Dicta ratione
            deleniti illo corporis, at nulla ipsam quibusdam ipsum officia
            animi, eligendi amet magnam obcaecati consectetur cum neque sed
            doloribus. Soluta! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident, reprehenderit inventore. Aut nihil
            temporibus reiciendis odio accusamus ullam sit blanditiis, tempore
            quo reprehenderit doloribus quis voluptatem neque. Soluta,
            aspernatur eaque.
          </label>
        </div>
      </div>
    </>
  );
};

export default PerfilPage;
