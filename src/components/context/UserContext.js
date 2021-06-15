import { createContext } from "react";

const userContext = createContext();

const data = {user,login,logout,isLogged}

const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }
  }, [user]);

  