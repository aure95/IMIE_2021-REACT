import logo from './logo.svg';
import './App.css';
import HelloWorld from './component/HelloWorld.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>HELLO WORLD</h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
