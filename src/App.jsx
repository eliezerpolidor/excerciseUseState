import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0);

  return (
    <div className="App">
      <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header navbar-dark bg-dark text-white" >
            <h2 className="h4">Reloj</h2>
          </div> 
          <div className="card-body bg-warning text-black-50" >
            <p>
              Has Clickeado {count} veces sobre el Boton
            </p>
          </div>
          <div className="card-fooder">
            <button className="btn btn-info" onClick={() => setCount(count + 1)}>
              Clickea Aqui 
            </button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
