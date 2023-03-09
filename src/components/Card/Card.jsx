import React from 'react'
import './Card.css'

const Card = ({nombre, apellido, cancionFavorita}) => {
    return (
        <div className='card-container'>
            <p> Tu nombre es: <span className='card-container__user'>{nombre}</span></p>
            <p>Tu apellido es: <span className='card-container__user'>{apellido}</span></p>
            <p>Tu canción favorita es: <span className='card-container__user'>{cancionFavorita}</span></p>
        </div>
    )
}

export default Card