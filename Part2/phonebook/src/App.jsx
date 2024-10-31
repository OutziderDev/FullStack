import { useState,useEffect } from "react";
import Title from './Components/Title';
import TotalList from './Components/TotalList';
import Form from './Components/Form';
import SearchInput from "./Components/SearchInput";
import PersonService from './Services/Node';
//console.log(PersonService.deletePerson('5c25'));

 function App() {
  // useStates and Effects
  const [persons,setPerson] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search,setSearch] = useState('');
  useEffect( () => {PersonService.getAll().then(TotalPersons => setPerson(TotalPersons)).catch(error => console.error("Error al obtener datos:", error));},[])

  //Funciones
  const handlerAddPerson = (event) =>{
    event.preventDefault();
    if (!newName || !newPhone) {
      alert( !newName ? "Write your name" : 'Whrite your CellPhone Number');
      return;
    }
    const isDuplicate = persons.some((person)=>person.name === newName)

    if(isDuplicate){
      alert(`${newName} is already added to phonebook`);
    }else{
      const addNewPerson = {name:newName,number:newPhone};
      PersonService.postAddPerson(addNewPerson).then(newPerson =>{ 
        setPerson(persons.concat(newPerson)); 
      })
    }

    setNewName(''); setNewPhone('')
  }
  const handlerChangeInput = (event) => setNewName(event.target.value);
  const handlerPhoneInput = (event) => setNewPhone(event.target.value);
  const handlerSearchInput = (event) => setSearch(event.target.value);
  const handlerDeletePerson = (id) => {
    PersonService.deletePerson(id)
                 .then(() =>{
                    setPerson(prevPersons => prevPersons.filter(persons => persons.id !== id));
                 })
                 .catch(error => console.error("erdiablo paso: ",error))
  }
  
  return (
    <> 
      <Title title={"Phonebook"}/>
      <SearchInput search={search} onChangeSearch={handlerSearchInput}/>
      <hr />
      <Title title={"Add a new"}/>
      <Form onSubmit={handlerAddPerson} valueName={newName} valuePhone={newPhone} onChangeName={handlerChangeInput} onChangePhone={handlerPhoneInput}/>
      <hr />
      <Title title={'Numbers'}/>
      <TotalList data={persons} filter={search} handlerDeletePerson={handlerDeletePerson}/>   
    </>    
  )
}

export default App
