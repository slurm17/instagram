import { UserProvider } from "./components/context/UserContext";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    <UserProvider>
      <AppRouter/>
    </UserProvider>
  );
}

export default App;
