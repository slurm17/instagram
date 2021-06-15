import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import PerfilPage from "./components/pages/PerfilPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={PerfilPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
