import React from 'react'
import "../../styles/estilo.css";

const Error = ({mensaje}) => {
    return (
        <p className='mensaje-error'>
            {mensaje}
        </p>
    )
}

export default Error
