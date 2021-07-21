import axios from "axios";
import { useHistory } from "react-router-dom";

const API = "http://localhost:3000";
const img = "https://i.imgur.com/NTmTX1P.jpeg";

const services = {
  async register(newUser) {
    try {
      await axios
        .get(`${API}/users`, {
          params: {
            email: newUser.email,
          },
        })
        .then((res) => {
          // console.log(res);
          // if (res.data.length) throw new Error("El correo ya está registrado");
          // if (newUser.email == "") throw new Error("Debe ingresar un email");
          // if (newUser.name == "") throw new Error("Debe ingresar un nombre");
          // if (newUser.lastName == "") throw new Error("Debe ingresar un apellido");
          // if (newUser.passwd == "") throw new Error("Debe ingresar una contraseña");
        })
        .then(() => {
          axios.post(`${API}/users`, {
            email: newUser.email,
            name: `${newUser.name} ${newUser.lastName}`,
            passwd: newUser.passwd,
            folowers: 0,
            folowing: 0,
            posts: 0,
            profileIMG: `${img}`,
          });
          
        });
    } catch (error) {
      return [false, error];
    }
  },
};

export default services;
