import { useEffect, useState } from "react";
import { getAll } from "./countriesAPI";
const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await getAll();
      setAllCountries(response);
    };

    getAllCountries();
  }, []);

  console.log(allCountries);

  const display = allCountries.map((details) => {
    return (
      <div>
        <img src={details.flags.png} alt="Country Flag"></img>
        <h2>{details.name.common}</h2>
        <p>{details.population}</p>
        <p>{details.region}</p>
        <p>{details.capital}</p>
      </div>
    );
  });
  return { display };
};

export default Countries;
