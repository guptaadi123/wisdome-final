import React from 'react'
import './Card.css';
function Card({src,title,descriptions,price}) {
    return (
        <div className='card'>
            <img src={src}  />
            <div className="card__info">
            <h2>{title}</h2>
            <h4>{descriptions}</h4>
            <h3>{price}</h3>
            </div>
            
        </div>
    )
}

export default Card
