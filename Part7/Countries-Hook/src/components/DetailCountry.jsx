import ProTypes from 'prop-types'

const DetailCountry = ({ data }) => {
  console.log('lo que llega',data);
  
  return (
    <>  
      <div className="text-white max-w-6xl mx-auto">
        <h3>{data.name.common} </h3>
        <div>capital {data.capital} </div>
        <div>population {data.population}</div>
        <img src={data.flags.svg} height='100' className="mask-flag" alt={`flag of ${data.name.common}`}/>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8"> 
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>
          <CountryMiniCard nombre={country.name.common} capital={country.capital} imagen={country.flags.svg} poblacion={country.population}/>

        </div> */}
      </div>
    </>
  )
}

DetailCountry.proTypes = {
  data: ProTypes.object
}

export default DetailCountry