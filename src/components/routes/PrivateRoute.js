import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import routes from "./helper/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {isLogged} = useContext(UserContext);
  const location = useLocation();
  // console.log(contexto)
  return (
    <Route {...rest}>
      {() => isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: routes.login, state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
