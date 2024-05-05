import PropTypes from 'prop-types'
import './Button.css'

export default function Encabezado(props) {
  return (
    <div> 
      <h1 className='Encabezado'>{props.titulo}</h1>

      <div className='Inicio'>
      <h2>{props.Inicio} </h2>
      </div>
      <div className='Contacto'>
        <h2>{props.contacto}</h2>
      </div>
    
    </div>
  );
}

Encabezado.propTypes ={ 
    titulo: PropTypes.string.isRequired,
    colorBoton: PropTypes.string,
}
