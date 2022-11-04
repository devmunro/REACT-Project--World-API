import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./countriesAPI";
import { Countries } from "./countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about";

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await getAll();
      setAllCountries(response);
    };

    getAllCountries();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="Header">
          <h1 className="title">Where in the World?</h1>
          <p>darkmode</p>
        </div>
        <Routes>
        <Route exact path="/" element={<Countries
          allCountries={allCountries}
          setAllCountries={setAllCountries}
        />}></Route>
        
        
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
