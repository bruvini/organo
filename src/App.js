import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario 
      aoColaboradorCadastrado = {aoNovoColaboradorAdicionado}/>
    </div>
  );
}

export default App;
