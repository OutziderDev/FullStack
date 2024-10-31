import ListUnique from "./ListUnique"

const TotalList = ({data,filter,handlerDeletePerson}) => {
    const FilterData = filter ? data.filter(searchData => searchData.name.toLowerCase().includes(filter.toLowerCase())) : data
    return(
     <ul>
       {FilterData.map(person => <ListUnique key={person.id} name={person.name} number={person.number} handlerDeletePerson={()=>handlerDeletePerson(person.id,person.name)}/>)}
    </ul> 
    )
}


export default TotalList;