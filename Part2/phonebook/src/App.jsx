import { useState } from "react";
import Title from './Components/Title';
import TotalList from './Components/TotalList';
import Form from './Components/Form';

 function App() {
  const [persons,setPerson] = useState([{name:'Arto Hellas',number:'55-88-1234567'},{name:'Ada Lovelace',number:'33-55-1234567'}]);
  //console.log(persons);
  
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

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
      setPerson(persons.concat(addNewPerson)); 
    }

    setNewName(''); setNewPhone('')
  }

  const handlerChangeInput = (event) => setNewName(event.target.value)

  const handlerPhoneInput = (event) => setNewPhone(event.target.value)
  
  
  return (
    <> 
      <Title title={"Phonebook"}/>
      <Form onSubmit={handlerAddPerson} valueName={newName} valuePhone={newPhone} onChangeName={handlerChangeInput} onChangePhone={handlerPhoneInput}/>
      <hr />
      <Title title={'Numbers'}/>
      <TotalList data={persons}/>
      
    </>
  )
}

export default App
