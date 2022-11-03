import './App.css';
import { useEffect, useState } from "react";
import { getAll } from "./countriesAPI";
import Countries from './countries';

function App() {

  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await getAll();
      setAllCountries(response);
    };
  
    getAllCountries();
  }, []);


  
console.log(allCountries)
  return (
    <div className="App">
      
  
     <Countries allCountries={allCountries} />
     
    </div>
  );
}

export default App;
