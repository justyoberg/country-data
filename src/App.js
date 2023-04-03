import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import axios from "axios";
const apiKey = "97c480bbc70f77b8b3995678d59993b6";

function App() {
  const [countries, setCountries] = useState(null);
  const [newSearch, setNewSearch] = useState("");
  const [shownCountry, setShownCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (shownCountry) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${shownCountry.capital}&appid=${apiKey}`
        )
        .then((response) => setWeather(response.data));
    }
  }, [shownCountry]);

  useEffect(() => {
    setShownCountry(null);
  }, [newSearch]);

  if (!countries) return null;

  const countriesToShow = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(newSearch.toLowerCase());
  });

  const handleChange = (event) => {
    setNewSearch(event.target.value);
  };

  const showCountry = (country) => {
    setShownCountry(country);
  };

  return (
    <div>
      <h1>Find countries</h1>
      <input value={newSearch} onChange={handleChange} />
      <Countries
        countries={countriesToShow}
        shown={shownCountry}
        setShown={showCountry}
        weather={weather}
      />
    </div>
  );
}

export default App;
