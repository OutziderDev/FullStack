import  { useState } from 'react'
import { useField } from './hooks'
import { useCountry } from './hooks'
import Country from './components/Country'
import StarBorder from './components/StarBorder'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    console.log('hola')
  }

  return (
    <div className='container mx-auto max-w-2xl'>
      <h1 className='text-white uppercase text-center text-7xl m-10 text-wrap'>Detalles de Paises</h1>
      <form className='' onSubmit={fetch}>
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

      <Country country={country} />
    </div>
  )
}

export default App