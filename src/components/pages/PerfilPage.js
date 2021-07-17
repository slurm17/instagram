import React, { useContext } from "react";
import "../../styles/estilo.css";
import UserContext from "../context/UserContext";
import NavPage from "./NavPage";

const PerfilPage = () => {
  const { user, logout } = useContext(UserContext);
  const src = `https://i.blogs.es/594843/chrome/450_1000.jpg`;
  return (
    <>
      <main className="perfil">
        <NavPage />
        <div className="prf-container">
          <div className="prf-info">
            <div className="prf-foto">
              <button>
                <img src={user.profileIMG} alt="" />
              </button>
            </div>
            <div className="prf-datos">
              <div className="gral">
                <h1 className="nomUser">{user.name}</h1>
                <button className="editarPerfil">Editar perfil</button>
                <button className="config">C</button>
              </div>
              <ul className="numeros">
                <li className="nroPosts">3 publicaciones</li>
                <li className="seguidores">{user.folowers} seguidores</li>
                <li className="seguidos">{user.folowing} seguidos</li>
              </ul>
            </div>
          </div>
          <div className="prf-posts">
            <span>
              El pasaje estándar Lorem Ipsum, usado desde el año 1500. "Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Sección 1.10.32 de "de Finibus Bonorum et Malorum", escrito por
              Cicero en el 45 antes de Cristo "Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default PerfilPage;
