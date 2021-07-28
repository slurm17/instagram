import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const contextValue = {
    user,
    login(usuario){
      setUser(usuario)
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
