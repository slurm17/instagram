import axios from "axios";
const API = "http://localhost:3000";

const emailExist = async (email) => {
  const result = await axios.get(`${API}/users`, {
    params: {
      email: email,
    },
  });

  return new Promise((resolve, reject) => {
    if (!!result.data.length)
      reject({ mensaje: "El email ya está registrado", campo: "email" });
    else resolve(result);
  });
};

const postUser = async (newUser) => {
  return await axios.post(`${API}/users`, {
    email: newUser.email,
    name: `${newUser.name} ${newUser.lastName}`,
    passwd: newUser.passwd,
    folowers: 0,
    folowing: 0,
    posts: 0,
    profileIMG: `https://i.imgur.com/NTmTX1P.jpeg`,
  });
};

export { emailExist, postUser };
