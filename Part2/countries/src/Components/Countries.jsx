import SelectedCountry from './SelectedCountry';

const Countries = ({data,filter}) =>{ 
    const findCountrie = filter ? data.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []
    const exatlyCountry = findCountrie.length === 1 ? findCountrie[0] : null 
    return(
    <>
        {
            findCountrie.length > 10 
            ? (<div>Too Many matches, specify another filter please</div>) 
            : findCountrie.length === 1 ? (<SelectedCountry data={exatlyCountry}/>) 
            : (<ul>
                {findCountrie.map(c => <li key={c.name.common}>{c.name.common}</li>)}
              </ul>)        
        }  
    </>
    )
}
export default Countries;