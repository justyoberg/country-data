import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(null);
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  if (!countries) return null;

  const countriesToShow = countries.filter((c) => {
    return c.name.common.toLowerCase().includes(newSearch.toLowerCase());
  });

  const handleChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h1>Find countries</h1>
      <input value={newSearch} onChange={handleChange} />
      <Countries countries={countriesToShow} />
    </div>
  );
}

export default App;
