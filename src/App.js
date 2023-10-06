import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Cheack the weather</h1>
      <Weather />

      <footer className="mt-5">
        This project was coded by Michal and is{" "}
        <a href="https://github.com/michali10us/weather-react">
          Open-sourced coded{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
