import { useFilter, useCountry } from './hooks/index';
import Country from './components/Country';
import StarBorder from './components/StarBorder';

const App = () => {
  const {filter} = useFilter(); // Ahora usamos el filtro global
  const countries = useCountry();
 
  return (
    <div className='w-full h-full'>
      <div className='relative'>

        <div className="absolute bg-[url('/fondo.webp')] [mask-image:linear-gradient(black_50%,transparent)] inset-0 bg-cover bg-bottom w-full grayscale-50"></div>

        <div className='max-w-6xl mx-auto text-center'>

          <h1 className='text-white font-primary uppercase text-3xl font-bold md:text-6xl pt-20 text-wrap -skew-3'>
            GeoMundi
          </h1>
          <br />
          <p className='text-xl md:text-3xl font-bold text-cyan-300 backdrop-blur-sm select-none my-4 py-2 -skew-2 text-balance animate-pulse'>
            Check information about the country you are interested in.
          </p>
          
          <StarBorder as="div" className="max-w-2xl md:w-full transition-all" color="white" speed="4s">
            <div className='flex justify-between'>  
              <input
                disabled={countries.loading}
                value={filter.value}
                onChange={filter.onChange}
                placeholder={ countries.loading ? 'Wait a moment...' : "Write a country: Mexico..."}
                className="bg-transparent border-none outline-none text-xl text-white placeholder-gray-400 w-full p-2"
              />         
            </div>
          </StarBorder>
          
        </div>  
      </div>

      <Country country={countries} filter={filter.value}/> 
    </div>
  );
};

export default App;