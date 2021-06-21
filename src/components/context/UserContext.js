import React, { Children, createContext, useContext, useState } from 'react'


const UserConetxt = createContext()

const UserProvider = ({children}) => {

  const [user, setUser] = useState()

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
    <UserConetxt.Provider value={contextValue}>
      {children}
    </UserConetxt.Provider>
  )
}

export {UserProvider}
export default UserConetxt
