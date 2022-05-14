import './App.css';
import Depoimento from './components/Depoimento'

function App() {
  return (
    <div className='App'>
      <div className='container-principal'>
        <h1>Isso é o que nossos alunos dizem sobre o freeCodeCamp:</h1>
        <Depoimento/>
      </div>
    </div>
  );
}

export default App;
