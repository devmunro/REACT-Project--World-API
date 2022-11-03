const Countries = ({ allCountries }) => {
  const check = allCountries.map((details) => {
    return (
      <div>
        <img src={details.flags.png} alt="Country Flag" />
        <h2>{details.name.common}</h2>
        <p>{details.population}</p>
        <p>{details.region}</p>
      </div>
    );
  });
  return check;
};

export default Countries;
