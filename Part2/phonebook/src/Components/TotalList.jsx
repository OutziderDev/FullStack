import ListUnique from "./ListUnique"

const TotalList = ({data}) => 
    <ul>
       {data.map(person => <ListUnique key={person.name} name={person.name} number={person.number} />)}
    </ul>


export default TotalList;