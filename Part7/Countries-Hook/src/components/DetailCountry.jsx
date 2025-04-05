import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const DetailCountry = ({ data }) => {
  const position = data.capitalInfo?.latlng
  
  return (
    <>  
      <section className="text-white md:max-w-6xl md:mx-auto min-h-screen rounded-lg bg-black/50 my-15 mx-4 border border-white/20 p-6">
        <h2 className='text-center text-5xl md:text-7xl mb-10 text-sky-400 font-bold uppercase animate-pulse -skew-3'>{data.name.common} </h2>
        
        <div className="flex flex-col w-full h-full">
          <section className="flex flex-col md:flex-row gap-28 mt-10 w-full h-full justify-center">
            
            <div className="flex flex-col justify-center -mt-10 md:-m-0 items-center md:items-start gap-5 order-2">

              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold text-3xl">Capital: </h3>
                <p className={`${data.capital[0].length > 18 ? 'text-xl' : 'text-5xl' } font-bold text-sky-400 uppercase -skew-3 text-pretty animate-pulse hover:scale-105 transition-all`}>{data.capital}</p>
              </div>

              <div className="flex flex-col items-center md:items-start ">
                <p className="font-bold text-3xl">Population:</p>
                <p className="text-5xl font-bold text-sky-400 uppercase hover:scale-105 transition-all">{data.population}</p>
              </div>

              <div className="flex flex-col items-center md:items-start ">
                <p className="font-bold text-3xl">Region:</p>
                <p className="text-5xl font-bold text-sky-400 uppercase hover:scale-105 transition-all">{data.region}</p>
              </div>

            </div>
            
            <img src={data.flags.svg} className="mask-flag w-[26rem] object-contain hover:scale-110  md:order-2 order-1 transition-all" alt={`flag of ${data.name.common}`}/>
          </section>
        
          <section className="flex flex-col md:flex-row gap-28 mt-16 pt-10 border-t border-white/20 w-full h-full justify-center ">
            <div >
              <img src={data.coatOfArms.svg} className=" w-80 h-80 object-contain hover:scale-110  md:order-2 order-1 transition-all" alt={`flag of ${data.name.common}`}/>
              <p className="font-bold text-3xl mt-5 text-center ">Coat of Arms:</p>
            </div>
            {/* Mapa */}
            <div className='flex flex-col justify-center items-center -mt-15 md:mt-0'>
              <MapContainer
                center={position}
                zoom={8}
                scrollWheelZoom={true}
                className='size-80 md:h-80 md:w-[30rem]'
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={position}>
                  <Popup>{data.capital}</Popup>
                </Marker>
              </MapContainer>  
              <p className="font-bold text-3xl mt-5 text-center ">Localization:</p>

            </div>  
          </section>

        </div>
        
      </section>
    </>
  )
}

DetailCountry.propTypes = {
  data: PropTypes.object
}

export default DetailCountry