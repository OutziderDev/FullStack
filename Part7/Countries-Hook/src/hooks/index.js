import { useState, useEffect } from 'react'

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (!name) return setCountry(null);

    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
        );

        if (!response.ok) throw new Error("Country not found");

        const data = await response.json();
        setCountry({ ...data, found: true });
      } catch (error) {
        console.error(error);
        setCountry({ found: false });
      }
    };

    fetchCountry();
  }, [name]);

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