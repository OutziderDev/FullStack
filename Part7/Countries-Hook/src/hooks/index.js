import { useState, useEffect } from 'react'

export const useCountry = () => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://studies.cs.helsinki.fi/restcountries/api/all` /*''name/${name}`*/
        );

        if (!response.ok) throw new Error("Countries not found");

        const data = await response.json();
        setCountry({ ...data, found: true });
      } catch (error) {
        console.error(error);
        setCountry({ found: false });
      }
    };

    fetchCountries();
  }, []);

  return country
}

export const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}