import  { useState } from 'react'
import { useField, useCountry } from './hooks'
import Country from './components/Country'
import StarBorder from './components/StarBorder'

const App = () => {
  const nameInput = useField('text')
  const [filter, setFilter] = useState('')
  const countries = useCountry()
  console.log(countries);
  
 
  const fetch = (e) => {
    e.preventDefault() 
    setFilter(nameInput.value)
  }

  return (
    <div className='w-full h-full'>
      <div className='relative  '>

        <div className=" absolute bg-[url('/fondo.webp')] [mask-image:linear-gradient(black_70%,transparent)] inset-0 bg-cover bg-bottom w-full  grayscale-50"></div>

        <div className='max-w-6xl mx-auto text-center '>
          <h1 className='text-white font-primary uppercase text-6xl pt-20 text-wrap font-bold -skew-3'> GeoMundi Digital </h1>
          <br />
          <p className='text-2xl font-bold  text-cyan-300 backdrop-blur-sm select-none my-8 py-2  -skew-3 animate-pulse'> Check information about the country you are interested in. </p>
        
          <form className='pb-10' onSubmit={fetch}>
            <StarBorder
              as="div"
              className="w-full"
              color="white"
              speed="4s"
            >
              <div className='flex justify-between'>  
                <input
                  {...nameInput} 
                  placeholder="Escribe tu país: Mexico..."
                  className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full p-2"
                />
                <button className=' text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-amber-50/10'>Buscar</button>
              </div>
            </StarBorder>
          </form>
        </div>  
      </div>

      <Country country={countries} filter={filter}/>
    </div>
  )
}

export default App