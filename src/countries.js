
import {useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "./countriesCONTEXT";

export const Countries = () => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    console.log(select);
  };

  const {
    searchWord,
    setSearchWord,
    select,
    setSelect,
    filterSearch,
    groups,
  } = useContext(CountriesContext);
  

  let displayCountries = groups.map((details) => {
    return (
      <Link to={`/countries/${details.area}`}>
        <div key="details.area" className="card">
          <img className="cardImg" src={details.flags.png} alt="Country Flag" />
          <div className="cardDetails">
            <h2 className="countryTitle">{details.name.common}</h2>
            <p className="altName">({details.name.official})</p>
            <ul className="countryDetails">
              <li>
                <b>Population:</b> {details.population}
              </li>
              <li>
                <b>Region:</b> {details.region}
              </li>
              <li>
                <b>Capital:</b> {details.capital}
              </li>
            </ul>
          </div>
        </div>
      </Link>
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
    <div className="Main">
      <div className="searchArea">
        <input
          className="searchBar"
          placeholder="Search for a country"
          value={searchWord}
          onChange={handleChange}
        ></input>
        <select className="selectBar" value={select} onChange={handleSelect}>
          <option defaultValue value="none">
            Filter by region...
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="none">None</option>
        </select>
      </div>

      {/* <div>{autocomplete}</div> */}
      <div className="cardContainer">{displayCountries}</div>
    </div>
  );
};
