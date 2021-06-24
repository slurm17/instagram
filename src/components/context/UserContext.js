import axios from "axios";
import React, { Children, createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const contextValue = {
    user,
    async login(email, passwd) {
      try {
        await axios
          .get("http://localhost:3000/users", {
            params: {
              email: email,
            },
          })
          .then((res) => {
            if (res.data == "") throw new Error("El correo no es válido");
            else return res;
          })
          .then((res) => {
            if (res.data[0].passwd !== passwd) throw new Error("La contraseña no es correcta");
            else setUser(res.data[0]);
          });
      } catch (error) {
        return console.error(error);
      }
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
