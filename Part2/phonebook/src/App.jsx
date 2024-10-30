import { useState,useEffect } from "react";
import Title from './Components/Title';
import TotalList from './Components/TotalList';
import Form from './Components/Form';
import SearchInput from "./Components/SearchInput";
import axio from 'axios'

 function App() {
  // useStates and Effects
  const [persons,setPerson] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search,setSearch] = useState('');
  const hook = () =>{axio .get('http://localhost:3001/persons').then(Resp => setPerson(Resp.data))}
  useEffect(hook,[])

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
      const addNewPerson = {name:newName,number:newPhone,id:persons.length+1};
      setPerson(persons.concat(addNewPerson)); 
    }

    setNewName(''); setNewPhone('')
  }
  const handlerChangeInput = (event) => setNewName(event.target.value);
  const handlerPhoneInput = (event) => setNewPhone(event.target.value);
  const handlerSearchInput = (event) => setSearch(event.target.value);
  
  return (
    <> 
      <Title title={"Phonebook"}/>
      <SearchInput search={search} onChangeSearch={handlerSearchInput}/>
      <hr />
      <Title title={"Add a new"}/>
      <Form onSubmit={handlerAddPerson} valueName={newName} valuePhone={newPhone} onChangeName={handlerChangeInput} onChangePhone={handlerPhoneInput}/>
      <hr />
      <Title title={'Numbers'}/>
      <TotalList data={persons} filter={search} />   
    </>    
  )
}

export default App
