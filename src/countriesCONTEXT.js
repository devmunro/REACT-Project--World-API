import { createContext, useState, useEffect } from "react";
import { getAll, getName, getRegion } from "./countriesAPI";
import { Link } from "react-router-dom";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [select, setSelect] = useState("none");
  const [filterSearch, setFilterSearch] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await getAll();
      if(response.status) {console.log("getall error")}
      else{
      setAllCountries(response);}
    };

    getAllCountries();
  }, []);

  useEffect(() => {
    const filterRegion = async (region) => {
      if (select !== "none") {
        const res = await getRegion(region);
        if (res.status) {
          console.log("region error");
        } else {
          setGroups(res);
          setSearchWord("");
        }
      } else {
        setGroups(allCountries);
      }
    };

    const search = async (query) => {
      if (query.length > 0) {
        const response = await getName(query);

        if (response.status) {

            console.log("search error");
         
        } else { setGroups(response);
            setSelect("none");
            console.log(response);}
      } else {
        setFilterSearch(allCountries);
      }
    };

    search(searchWord);
    filterRegion(select);
  }, [searchWord, allCountries, select]);

  let displayCountries = groups.map((details) => {
    return (
      <Link to={`/${details.cca3}`}>
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

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        searchWord,
        setSearchWord,
        select,
        setSelect,
        filterSearch,
        setFilterSearch,
        groups,
        setGroups,
        displayCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
