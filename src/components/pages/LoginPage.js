import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/normalize.css'
import '../../styles/estilos.css'
import UserContext from '../context/UserContext'


const LoginPage = () => {

  const {login} = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')

  const handleOnChange = (e, campo) =>{
    switch (campo) {
      case 'email':
        setEmail(e.target.value)
        break;
      case 'passwd':
        setPasswd(e.target.value)
      default:
        break;
    }
  }

    return (
      
        <div className="body-inicio">
        <div className="inicio-container">
          <div className="inicio-titulo">
            <h1>Instagram</h1>
          </div>
          <form className="inicio-form">
            <input type="text" className="inicio-form-user" placeholder="correo electrónico" 
            onChange={(e)=>handleOnChange(e,'email')}/>
            <input type="password" className="inicio-form-passwd" placeholder="contraseña" 
            onChange={(e)=>handleOnChange(e,'passwd')}/>
            <input type="button" className="inicio-form-boton" value="Iniciar sesión" 
            onClick={()=>login(email,passwd)}/>
            <label className="ntc">¿No tienes cuenta?</label>
            <Link className="reg" to="/register">Regístrate</Link>
            <Link to="/profile">perfil</Link>
          </form>
          {/* <div>
            <h5>Error</h5>
          </div> */}
        </div>
      </div>
    )
}

export default LoginPage
