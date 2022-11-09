import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <p>
          Front-end com React
        </p>
        <a
          className="App-link"
          href="https://pt-br.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais informações
        </a>
      </header>
    </div>
  );
}

export default App;
