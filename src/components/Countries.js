const Countries = ({ countries }) => {
  console.log(countries)
  if (countries.length <= 0)
    return <p>No matches found</p>
  else if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  else if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <p>Capital: {countries[0].capital[0]}</p>
        <p>Area: {countries[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(countries[0].languages).map(item => {
            return <li>{item}</li>
          })}
        </ul>
        <img src={countries[0].flags.png} alt="flag"/>
      </div>
    );
  }

  return (
    <ul>
      {countries.map((item) => {
        return <li key={item.name.common}>{item.name.common}</li>
      })}
    </ul>
  );
};

export default Countries;
