import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // 1. Carga todos los países al iniciar la aplicación
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  // 2. Filtra los países al cambiar la consulta de búsqueda
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCountries([]);
      setSelectedCountry(null);
      return;
    }

    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filtered.length === 1) {
      setSelectedCountry(filtered[0]);
    } else {
      setSelectedCountry(null);
    }

    setFilteredCountries(filtered);
  }, [searchQuery, countries]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Country Info</h1>
      <input
        type="text"
        placeholder="Search for a country"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : selectedCountry ? (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area} km²</p>
          <p>Languages:</p>
          <ul>
            {Object.values(selectedCountry.languages).map(lang => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name.common} flag`}
            style={{ width: '150px' }}
          />
        </div>
      ) : (
        filteredCountries.map(country => (
          <p key={country.cca3}>{country.name.common}</p>
        ))
      )}
    </div>
  );
};

export default App;