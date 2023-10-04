import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cheack the weather</p>
        <Weather />

        <footer>
          <a href="https://github.com/michali10us/weather-react">
            Open-sourced coded{" "}
          </a>
          by Michal
        </footer>
      </header>
    </div>
  );
}

export default App;
