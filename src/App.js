import logo from './logo.svg';
import './App.css';
import Global from './components/Global';
function App() {
  return (
    <div className="App">
    <Global>    
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </Global>
    </div>
  );
}

export default App;
