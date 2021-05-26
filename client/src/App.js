import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Heroes from "./components/Heroes";
import AddHero from "./components/AddHero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddHeroes from "./components/AddHero";

function App() {
  return (
    <Router>
      <div className="App">
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
