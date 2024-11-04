import SelectedCountry from './SelectedCountry';
import { useState,useEffect } from 'react';
import axios from 'axios';
const api_key = import.meta.env.VITE_SOME_KEY;

const Countries = ({data,filter,updateFilter}) =>{ 
    //Const
    const [weatherIn,setWeatherIn] = useState('')

    const findCountrie = filter ? data.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []
    const exatlyCountry = findCountrie.length === 1 ? findCountrie[0] : null 
    
     useEffect(()=>{
        //console.log('estamos en effect');
        if (exatlyCountry) {
            //console.log( exatlyCountry.name.common);      
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${exatlyCountry.name.common}&units=metric&appid=${api_key}`)
            .then(resp=>setWeatherIn(resp.data))
            .catch(error=>console.error('paso algo') )
        }
    },[exatlyCountry])  
     
    return(
    <>
        {
            findCountrie.length > 10 
            ? (<div>Too Many matches, specify another filter please</div>) 
            : findCountrie.length === 1 ? (<SelectedCountry data={exatlyCountry} isweatherlike={weatherIn}/>) 
            : (<ul>
                {findCountrie.map(c => <li style={{marginBlock:8}} key={c.name.common}>{c.name.common} - <button onClick={()=>updateFilter(c.name.common)}>Show</button> </li>)}
              </ul>)        
        }  
    </>
    )
}
export default Countries;