import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/normalize.css'
import '../../styles/estilos.css'

const LoginPage = () => {

  const cuentas = [
    {id:0, email:'pepe@live.com', passwd:'asd123'},
    {id:1, email:'luis@live.com', passwd:'asd123'},
    {id:2, email:'juan@live.com', passwd:'asd123'}
  ]

  const [cuenta, setCuenta] = useState({
    id: 0,
    email: '',
    passwd: ''
  })
 
  const verificarCuenta = (email, passwd) =>{
 
  }
  const handleOnChange = (event, campo) =>{

  }


    return (
      
        <body className="body-inicio">
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
            />
            {/* <a href="" className="otc">¿Olvidaste tu contraseña?</a> */}
            <label className="ntc">¿No tienes cuenta?</label>
            <Link className="reg" to="/register">Regístrate</Link>
            <Link to="/profile">perfil</Link>
          </form>
          <div>
            <h5>Error</h5>
          </div>
        </div>
      </body>
    )
}

export default LoginPage
