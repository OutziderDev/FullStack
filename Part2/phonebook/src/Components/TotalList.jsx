import ListUnique from "./ListUnique"

const TotalList = ({data,filter}) => {
    const FilterData = filter ? data.filter(searchData => searchData.name.toLowerCase().includes(filter.toLowerCase())) : data
    //console.log(FilterData);
    
    return(
     <ul>
       {FilterData.map(person => <ListUnique key={person.id} name={person.name} number={person.number} />)}
    </ul> 
    )
}


export default TotalList;