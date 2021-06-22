import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PerfilPage from "../pages/PerfilPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
      <>
    <Router>
      <Switch>
        <PrivateRoute exact path="/profile" component={PerfilPage}></PrivateRoute>
        <PublicRoute exact path="/register" component={RegisterPage}></PublicRoute>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/" component={PerfilPage}></Route>
      </Switch>
    </Router>
    </>
  );
};

export default AppRouter;
