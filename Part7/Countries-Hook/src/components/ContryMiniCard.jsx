import PropTypes from 'prop-types'

const CountryMiniCard = ({nombre, capital, imagen, poblacion}) => {
  return (
    <>
      <button className='inline-block cursor-pointer hover:scale-105 transition-all duration-300 hover:brightness-110'>
        <div className="bg-gradient-to-b h-[570px] flex flex-col from-white/5 to-white/20 rounded-lg p-4 gap-4 items-center">
          <img src={imagen}  className="shrink-0 select-none object-contain rounded-full size-48 mask-flag" alt={`flag of ${nombre}`}/>
          
          <div className='flex flex-col'>
            <h2 className={`animate-pulse uppercase font-bold text-center ${nombre.length > 18 ? 'text-[1.65rem]' :'text-4xl'}  text-sky-400 -skew-3 mb-2`}>{nombre} </h2>
            <p className='font-bold text-2xl italic text-white'>Capital
              <img src="../../capital.svg" className='inline-block ml-2' alt="" />
              <br />
              <strong className='uppercase text-sky-400'>{capital}</strong>
            </p>
            <span className='font-bold text-2xl italic text-white'>Population 
              <img src="../../poblacion.svg" className='inline-block ml-2' alt="" />
              <br />
              <strong className='text-2xl text-sky-400'>{poblacion}</strong>
            </span>
          </div>

        </div>
      </button>
    </>
  )
}

CountryMiniCard.propTypes = {
  nombre: PropTypes.string,
  imagen: PropTypes.string,
  capital: PropTypes.array,
  poblacion: PropTypes.number
}

export default CountryMiniCard