import ProTypes from 'prop-types'

const CountryMiniCard = ({nombre, imagen, poblacion}) => {
  return (
    <>
      <div className="bg-gradient-to-b flex from-white/10 to-white/20 rounded-lg ">
        <h3>{nombre} </h3>
        <p>{poblacion}</p>
        <img src={imagen}  className=" object-contain rounded-full size-30 mask-flag" alt={`flag of ${nombre}`}/>
      </div>
    </>
  )
}

CountryMiniCard.propTypes = {
  nombre: ProTypes.string,
  imagen: ProTypes.string,
  poblacion: ProTypes.string
}

export default CountryMiniCard