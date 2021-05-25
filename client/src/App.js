import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Heroes from "./components/Heroes";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
