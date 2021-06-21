import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PerfilPage from "../pages/PerfilPage";
import RegisterPage from "../pages/RegisterPage";


const AppRouter = () => {
  return (
      <>
    <Router>
      <Switch>
        <Route path="/profile" component={PerfilPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
    </>
  );
};

export default AppRouter;
