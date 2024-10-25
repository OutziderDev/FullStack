import ListUnique from "./ListUnique"

const TotalList = ({data}) => {
return(
    <ul>
       {data.map(person => <ListUnique key={person.name} name={person.name} />)}
    </ul>
)}

export default TotalList;