import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserContext from '../context/UserContext'

const PublicRoute = ({component: Component, ...rest}) => {

    const{isLogged} = useContext(UserContext)

    return (
        <Route {...rest}>
            {isLogged?<Redirect to="/profile"/>:<Component/>}
        </Route>
    )
}

export default PublicRoute
