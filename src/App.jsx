import './App.css'
import Button from './components/Button';
import Encabezado from './components/Encabezado';
import Contenido from './components/Contenido';
import Footer from './components/Footer';

export default function App() {
  

  return (
    <> 
 
     <Encabezado titulo='Carlos Store' 
     Inicio='Inicio' contacto='Contacto'/>

     <Contenido>
      <div className='Contenido'>
       <h1>Bienvenido a la tienda!</h1>
       <div>
        <h2></h2>
       </div>
      <Button/>
     </div>
     </Contenido>

     <Footer titulo= 'Envio Gratis' subtitulo= 'Mayor a $100' 
     titulo2 = 'Pago Rápido' subtitulo2= '100% Seguro' 
     titulo3 = 'Soporte 24/7' subtitulo3= 'Siempre para Usted' 
     />



        
      
    
      
         
     
  </>
  );
};

 



