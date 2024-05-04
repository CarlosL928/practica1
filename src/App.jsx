import './App.css'
import Card from './components/Card'
import vehicle from './data/Vehicle'
import ShowHide from './components/ShowHide'

function App() {
  const vehicleList = vehicle.map((v) => {
  return <Card title={v.name} description={v.description}/>
  });

  return (
    
      <div className='App'>
        <h1>App REACT</h1>
        <div className='container'>
       {vehicleList}
       </div>
      
            <ShowHide/>
        </div>
    
  );
}

export default App;



