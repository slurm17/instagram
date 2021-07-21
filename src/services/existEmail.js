import axios from "axios";

export default async function emailExist(email) {
  return await axios.get("http://localhost:3000/users", {
    params: {
      email: email,
    },
  });
  // console.log(result.data.length)

  // if (!result.data.length) 
  // {throw new Error('asdasd')}
  // else
  // {return console.log('eso')}

}
