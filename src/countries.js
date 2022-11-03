const Countries = ({ allCountries }) => {
  const check = allCountries.map((details) => {
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
  return check;
};

export default Countries;
