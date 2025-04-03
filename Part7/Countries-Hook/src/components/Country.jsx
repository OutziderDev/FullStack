import PropTypes from 'prop-types';
import DetailCountry from '../components/DetailCountry'
import CountryMiniCard from '../components/ContryMiniCard';

const Country = ({ country, filter }) => {
  console.log('paiese',country);
  console.log('filtro',filter);
  
  
  const findContrie = filter ? country.filter(countries => countries.name.common.toLowerCase().include(filter.toLowerCase())) : []
  const exactlyCountry = findContrie.length === 1 ? findContrie[0] : null
  
  if (!country || !filter) { 
    return null
  }

  return (
    <>
      {
            findContrie.length > 10 
            ? (<div className="text-white max-w-6xl mx-auto text-4xl italic font-bold p-4 text-pretty">
                Not found... Maybe there are no matches for that name...
                </div>) 
            : findContrie.length === 1 ? (<DetailCountry data={exactlyCountry} />) 
            : (<ul>
                {findContrie.map(c => <CountryMiniCard key={c.name.common} nombre={c.name.common} capital={c.capital} imagen={c.flags.svg} poblacion={c.population}/>)}
              </ul>)        
        } 
      {/* <div className="text-white max-w-6xl mx-auto">
        <h3>{country.name.common} </h3>
        <div>capital {country.capital} </div>
        <div>population {country.population}</div>
        <img src={country.flags.svg} height='100' className="mask-flag" alt={`flag of ${country.name.common}`}/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8"> 
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>

        </div>
      </div> */}
    </>
  )
}

Country.propTypes = {
  country: PropTypes.object,
  filter: PropTypes.object 
}

export default Country