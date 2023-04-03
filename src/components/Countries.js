const Countries = ({ countries, shown, setShown, weather }) => {
  const showCountry = (country) => {
    if (weather) {
      return (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {country.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(country.languages).map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <img src={country.flags.png} alt="flag" />
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}c</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      );
    }
  };

  if (shown) {
    return showCountry(shown);
  }

  if (countries.length === 250) {
    return <p>Enter a country</p>;
  } else if (countries.length <= 0) {
    return <p>No matches found</p>;
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    setShown(countries[0]);
  }

  return (
    <ul>
      {countries.map((country) => {
        return (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => setShown(country)}>show</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Countries;
