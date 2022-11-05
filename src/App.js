import "./App.css";
import { Countries } from "./countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./country";
import { CountriesProvider } from "./countriesCONTEXT";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <div className="App">
          <div className="Header">
            <h1 className="title">Where in the World?</h1>
            <p>darkmode</p>
          </div>
          <Routes>
            <Route exact path="/" element={<Countries />}></Route>

            <Route exact path="/countries/:area" element={<Country />}></Route>
          </Routes>
        </div>
      </Router>
    </CountriesProvider>
  );
}

export default App;
