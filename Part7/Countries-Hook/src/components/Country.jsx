const Country = ({ country }) => {
  console.log(country)
  
  if (!country) { 
    return null
  }

  if (!country.found) {
    return (
      <div className="text-white">
        not found...
      </div>
    )
  }

  return (
    <div className="text-white">
      <h3>{country.name.common} </h3>
      <div>capital {country.capital} </div>
      <div>population {country.population}</div> 
      <img src={country.flags.svg} height='100' alt={`flag of ${country.name.common}`}/>   
    </div>
  )
}

export default Country