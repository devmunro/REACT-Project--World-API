import { getName, getRegion } from "./countriesAPI";
import { useEffect, useState } from "react";

export const Countries = ({ allCountries }) => {
  const [searchWord, setSearchWord] = useState([]);
  const [select, setSelect] = useState("none");
  const [filterSearch, setFilterSearch] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    console.log(select);
  };
  useEffect(() => {
    const filterRegion = async (region) => {
      if (select !== "none") {
        const res = await getRegion(region);
        setGroups(res)
        setSearchWord("");
      } else {
        setGroups(allCountries);
      }
    };

    const search = async (query) => {
      if (query.length > 0) {
        const response = await getName(query);

        if (!response.status) {
          setGroups(response);
          console.log(response);
        }
      } else {
        setFilterSearch(allCountries);
      }
    };

    search(searchWord);
    filterRegion(select);
  }, [searchWord, allCountries, select]);

  let displayCountries = groups.map((details) => {
    return (
      <div className="card">
        <img className="cardImg" src={details.flags.png} alt="Country Flag" />
        <div className="cardDetails">
          <h2>{details.name.common}</h2>
          <p>{details.population}</p>
          <p>{details.region}</p>
          <p>{details.capital}</p>
        </div>
      </div>
    );
  });

  const autocomplete = filterSearch.map((details) => {
    return (
      <li>
        {details.name.common}, {details.name.official}
      </li>
    );
  });
  return (
    <div>
      <input
        placeholder="Search for a country"
        value={searchWord}
        onChange={handleChange}
      ></input>
      <select value={select} onChange={handleSelect}>
        <option defaultValue value="none">
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="none">None</option>
      </select>

      {/* <div>{autocomplete}</div> */}
      <div className="cardContainer">{displayCountries}</div>
    </div>
  );
};
