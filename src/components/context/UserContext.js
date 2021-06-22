import React, { Children, createContext, useContext, useState } from 'react'


const UserContext = createContext()

const UserProvider = ({children}) => {

  const [user, setUser] = useState({ //MAL
    id:1,
    name: 'pedro'
  })
  // const [user, setUser] = useState(null)

  const contextValue = {
    user,
    login(){
      setUser({
        id:1,
        name: 'pedro'
      })
    },
    logout(){
      setUser(null)
    },
    isLogged(){
      return !!user
    }
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext
