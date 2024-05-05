import React, { useState } from 'react'
import './Button.css'


export default function Button() {
const [show, setShow] = useState(false);
const handleClick = (event) => {
  setShow(!show);
}
  return (
    <div className='Button'>
      
      <button onClick={handleClick}>{show ? "Ocultar " : "Ver "}Productos...</button>
      {show && <h2>Proximamente</h2>}

    </div>
  )
}

 