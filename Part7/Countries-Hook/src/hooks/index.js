import { useState, useEffect, useContext } from 'react'
import { CountryContext } from '../CountryContext' 

export const useCountry = () => {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://studies.cs.helsinki.fi/restcountries/api/all`
        );

        if (!response.ok) throw new Error("Countries not found");

        const data = await response.json();
        setCountry(data);
      } catch (error) {
        setError(error.message)
      } finally{
        setLoading(false)
      }
    };

    fetchCountries();
  }, []);

  return {country, loading, error}
}

export const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  return {
    type,
    value,
    onChange,
    reset
  }
}

export const useFilter = () => {
  return useContext(CountryContext)
}