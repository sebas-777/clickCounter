
import { useState } from 'react'
import './App.css'
import Button from './component/Button'
import Counter from './component/Counter'
import logoReact from './image/React-Symbol.png'


function App() { 

  const [numClic,setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClic + 1);
  };
 
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div  className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logoReact}
        alt='logo de react'
        />

      </div>
      <div className='container-main'>
        
        <Counter numClics={numClic} />
        
        <Button
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div>
  )
}

export default App
