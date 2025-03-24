import PropTypes from 'prop-types';
import CountryMiniCard from '../components/ContryMiniCard';

const Country = ({ country }) => {
  
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
    <>
      <div className="text-white max-w-6xl mx-auto">
        <h3>{country.name.common} </h3>
        <div>capital {country.capital} </div>
        <div>population {country.population}</div>
        <img src={country.flags.svg} height='100' className="mask-flag" alt={`flag of ${country.name.common}`}/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <CountryMiniCard nombre={country.name.common} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} imagen={country.flags.svg} poblacion={country.population}/>
        </div>
      </div>
    </>
  )
}

Country.propTypes = {
  country: PropTypes.object 
}

export default Country