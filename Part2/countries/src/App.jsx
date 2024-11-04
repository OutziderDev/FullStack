import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import Countries from './Components/Countries';
import axios from 'axios';

const App = () => {
  //Variables
  const [countries,setCountries] = useState([])
  const [filter, setFilter] = useState('')
  //Funtions
  const handlerFilter = (e) => setFilter(e.target.value)
  
  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
         .then(Response=> setCountries(Response.data)) 
  },[])
  
  return (
    <>
      <h1>View Countries</h1>
      <Filter value={filter} onChange={handlerFilter} />  
      <Countries data={countries} filter={filter} updateFilter={setFilter}/>
     </>
  );
};

export default App;