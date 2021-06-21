import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import PerfilPage from "./components/pages/PerfilPage";
import RegisterPage from "./components/pages/RegisterPage";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
