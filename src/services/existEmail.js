import axios from "axios";

// export default async function emailExist(email) {
//   return await axios.get("http://localhost:3000/users", {
//     params: {
//       email: email,
//     },
//   });
// }

export default async function emailExist(email) {
  const result = await axios.get("http://localhost:3000/users", {
    params: {
      email: email,
    },
  });

  return new Promise((resolve, reject) => {
    if(!!result.data.length) reject({mensaje : "El email ya está registrado",
    campo: 'email'});
    else resolve(result);
})
  
}