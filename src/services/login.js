import axios from "axios";
const API = "http://localhost:3000";

const emailExistente = async (email) => {
  const result = await axios.get(`${API}/users`, {
    params: {
      email: email,
    },
  });

  return new Promise((resolve, reject) => {
    if (!result.data.length)
      reject({ mensaje: "El email no está registrado", campo: "email" });
    else {
      resolve(result);
    }
  });
};

const passwdCoincide = (res, passwd) => {
  return new Promise((resolve, reject) => {
    if (!(res.data[0].passwd === passwd)) {
      reject({ mensaje: "La contraseña no es correcta", campo: "passwd" });
    } else {
        resolve(res);}
  });
};

export { emailExistente, passwdCoincide };
