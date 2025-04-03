import PropTypes from 'prop-types';
import DetailCountry from '../components/DetailCountry'
import CountryMiniCard from '../components/ContryMiniCard';

const Country = ({ country: AllCountries, filter }) => { 
  
  const findContrie = AllCountries && filter
  ? AllCountries.country.filter(countries =>
      countries.name.common.toLowerCase().includes(filter.toLowerCase())
    )
  : [];
  
  const exactlyCountry = findContrie.length === 1 ? findContrie[0] : null
    
  return (
    <>
      {
        findContrie.length > 10 
        ? (<div className="text-white max-w-6xl mx-auto text-4xl italic text-center font-bold p-4 text-pretty">
            Not found... Maybe there are no matches for that name...
            </div>) 
        : findContrie.length === 1 ? (<DetailCountry data={exactlyCountry} />) 
        : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-10 m-8"> 
            {findContrie.map(c =>
               <CountryMiniCard key={c.name.common} nombre={c.name.common} capital={c.capital} imagen={c.flags.svg} poblacion={c.population}/>
               )}
          </div>)        
        } 
    </>
  )
}

Country.propTypes = {
  country: PropTypes.object,
  filter: PropTypes.string 
}

export default Country