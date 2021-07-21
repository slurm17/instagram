import axios from "axios";

export default async function postUser(newUser){
    return await axios.post(
        "http://localhost:3000/users",
        {
          email: newUser.email,
          name: `${newUser.name} ${newUser.lastName}`,
          passwd: newUser.passwd,
          folowers: 0,
          folowing: 0,
          posts: 0,
          profileIMG: `https://i.imgur.com/NTmTX1P.jpeg`,
        }
    )
}