import SelectedCountry from './SelectedCountry';

const Countries = ({data,filter}) =>{ 
    const findCountrie = filter ? data.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []
    //console.log(findCountrie.length);
    //console.log(findCountrie);
    
    return(
    <>
    
        <ul>
          {findCountrie.map(c => <li key={c.name.common}>{c.name.common}</li>)}
        </ul>
        {
            findCountrie.length === 1 ? <SelectedCountry data={findCountrie}/> : ''
        }
        
    </>
    )
}
export default Countries;