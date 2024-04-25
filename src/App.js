
import './App.css';
import HelloWord from './components/HelloWord'; 
import SayMyName from './components/SayMyName'; 
import Pessoa from './components/Pessoa'; 
import List from './components/List'; 
import Evento from './components/Evento'; 
import Form from './components/Form'; 
import Condicional from './components/Condicional';
import Lista from './components/lista'; 
import SeuNome from './components/SeuNome'; 
import Saudacao from './components/Saudacao'; 
import {useState} from 'react'
function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>StateLift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome = {nome}/>
    </div>
  );
}

export default App;
