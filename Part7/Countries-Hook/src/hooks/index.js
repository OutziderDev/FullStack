import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(()=>{
    if(name === '') return setCountry(null)

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(Response=> setCountry({...Response.data,found: true}))
      .catch(()=> setCountry({found: false})) 
  },[name])
  //country ? console.log('contry', country.name.common ) : console.log('no country')
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