import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "./countriesCONTEXT";

const Country = () => {
  const { groups } = useContext(CountriesContext);
  let { id } = useParams();

  console.log(groups);
  let book;

  book = groups.filter((match) => match.cca3 === id); // code from res api
  console.log(book);

  const details = book[0];

  const money = Object.values(details.currencies);
  const moneyMapped = money.map((name) => <span>{name.name}, </span>);

  const languages = Object.values(details.languages).map((list) => (
    <span>{list}, </span>
  ));
  const native = Object.values(details.name.nativeName).map((list) => list);
let borders;
  if(details.borders) {
  borders = book[0].borders.map((border) =>  {return (<Link to={`/${border}`}><li>{border}</li></Link>)})
  console.log(borders)}

  return (
    <div key="details.area" className="container">
      <Link to={`/`}>Back</Link>
      <img className="countryImg" src={details.flags.png} alt="Country Flag" />
      <div className="countryFactsGroup">
        <h2 className="countryTitle">{details.name.common}</h2>
        <div className="countryStats">
          <ul className="countryDetails">
            <li>
              <b>Native Name:</b> {native[0].official}
            </li>
            <li>
              <b>Population:</b> {details.population}
            </li>
            <li>
              <b>Region:</b> {details.region}
            </li>
            <li>
              <b>Sub Region:</b> {details.subregion}
            </li>
            <li>
              <b>Capital:</b> {details.capital}
            </li>
          </ul>
          <ul className="countryDetails">
            <li>
              <b>Top Level Domain:</b> {details.tld}
            </li>
            <li>
              <b>Currencies:</b> {moneyMapped}
            </li>
            <li>
              <b>Languages:</b> {languages}
            </li>
          </ul>
        </div>

        <p>Border Countries</p>
        <nav>
          <ul>
            {details.borders ? borders : "No Border Country"}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Country;
