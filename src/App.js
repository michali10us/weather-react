import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cheack the weather</p>
        <Weather />
      </header>

      <footer>
        <a href="https://github.com/michali10us/weather-react">Open-sourced </a>
        by Michal
      </footer>
    </div>
  );
}

export default App;
