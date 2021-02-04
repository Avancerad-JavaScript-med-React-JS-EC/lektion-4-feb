import logo from './logo.svg';
import './App.css';

/**
 * En meny - komponent till vänster som innehåller namn
 * En info - komponent som visar upp detaljerad info om den anställda
 * 
 * 1. När jag klickar på ett namn så skicka med ett id i url:en på den anställda
 * 2. I info-komponenten hämta id från url:en och filtera ut den anställda från en array
 * 3. Visa information
 */

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
