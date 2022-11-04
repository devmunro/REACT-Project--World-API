import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./countriesAPI";
import {Countries} from "./countries";


function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await getAll();
      setAllCountries(response);
    };

    getAllCountries();
  }, []);

  console.log(allCountries);
  return (
    <div className="App">
      <div className="Header">
        <h1 className="title">Where in the World</h1>
        <p>darkmode</p>
      </div>
      
      <div className="cardContainer">
        <Countries allCountries={allCountries} setAllCountries={setAllCountries} />
      </div>
    </div>
  );
}

export default App;
