import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(null);
  const [newSearch, setNewSearch] = useState("");
  const [shownCountry, setShownCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const resetShown = () => {
    setShownCountry(null);
  }

  useEffect(() => {
    resetShown()
  }, [newSearch])

  if (!countries) return null;

  const countriesToShow = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(newSearch.toLowerCase());
  });

  const handleChange = (event) => {
    setNewSearch(event.target.value);
  };

  const showCountry = (country) => {
    setShownCountry(country);
  }

  return (
    <div>
      <h1>Find countries</h1>
      <input value={newSearch} onChange={handleChange} />
      <Countries countries={countriesToShow} 
                  shown={shownCountry} 
                  setShown={showCountry}
                  resetShown={resetShown}
      />
    </div>
  );
}

export default App;
