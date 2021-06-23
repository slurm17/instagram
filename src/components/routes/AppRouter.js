import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PerfilPage from "../pages/PerfilPage";
import RegisterPage from "../pages/RegisterPage";
import routes from "./helper/routes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
      <>
    <Router>
      <Switch>
        <PrivateRoute exact path={routes.profile} component={PerfilPage}></PrivateRoute>
        <PublicRoute exact path={routes.register} component={RegisterPage}></PublicRoute>
        <Route exact path={routes.login} component={LoginPage}></Route>
        <PrivateRoute exact path={routes.home} component={PerfilPage}></PrivateRoute>
        <Route path={routes.notFound} component={NotFoundPage}></Route>
      </Switch>
    </Router>
    </>
  );
};

export default AppRouter;
