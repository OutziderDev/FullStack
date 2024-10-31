const ListUnique = ({name,number,handlerDeletePerson}) => <li>{name} - {number} → <button onClick={handlerDeletePerson}>delete</button> </li>

export default ListUnique;