import  { useState } from 'react'
import { useField, useCountry } from './hooks'
import Country from './components/Country'
import StarBorder from './components/StarBorder'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault() 
    setName(nameInput.value)
  }

  return (
    <div className='w-full h-full'>
      <div className='relative  '>

        <div className=" absolute bg-[url('/fondo.webp')] [mask-image:linear-gradient(black_70%,transparent)] inset-0 bg-cover bg-bottom w-full  grayscale-50"></div>

        <div className='max-w-6xl mx-auto'>
          <h1 className='text-white font-primary uppercase text-center text-6xl pt-20 text-wrap font-bold -skew-3'>GeoMundi Digital </h1>

          <p className='text-center text-cyan-300 backdrop-blur-sm select-none  font-bold my-8 py-4 text-3xl -skew-3 animate-pulse'>Revisa informacion del pais de tu curiosidad</p>
        
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

      <Country country={country} />
    </div>
  )
}

export default App