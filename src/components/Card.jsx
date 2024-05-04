import React from 'react'
import "./Card.css"

export default function Card({title = "Titulo por defecto", description= "Descripcion por defecto"})
 {
  return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

