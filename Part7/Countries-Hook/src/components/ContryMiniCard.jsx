import ProTypes from 'prop-types'

const CountryMiniCard = ({nombre, capital, imagen, poblacion}) => {
  return (
    <>
      <button className='inline-block cursor-pointer hover:scale-105 transition-all duration-300 hover:brightness-110'>
        <div className="bg-gradient-to-b flex from-white/5 to-white/20 rounded-lg p-8 gap-4 items-center justify-between  ">
          <div className='flex flex-col'>
            <h3 className='animate-pulse uppercase font-bold text-center text-3xl text-sky-400 -skew-3 mb-2'>{nombre} </h3>
            <h2 className='font-bold text-md italic'>Capital <img src="../../capital.svg" className='inline-block' alt="" /> <strong className='uppercase text-sky-400'>{capital}</strong></h2>
            <span className='font-bold text-md italic'>Population <img src="../../poblacion.svg" className='inline-block' alt="" /> <strong className='text-2xl text-sky-400'>{poblacion}</strong></span>
          </div>

          <img src={imagen}  className="select-none object-contain rounded-full size-40 mask-flag" alt={`flag of ${nombre}`}/>
        </div>
      </button>
    </>
  )
}

CountryMiniCard.propTypes = {
  nombre: ProTypes.string,
  imagen: ProTypes.string,
  capital: ProTypes.string,
  poblacion: ProTypes.string
}

export default CountryMiniCard