import { useState } from "react"
import Title from './Components/Title';
import TotalList from './Components/TotalList';
import Form from './Components/Form'

 function App() {
  const [persons,setPerson] = useState([{name:'Pedro Arias'}]);
  const [newName, setNewName] = useState('');

  const handlerAddPerson = (event) =>{
    event.preventDefault();
    const addNewPerson = {name:newName};
    setPerson(persons.concat(addNewPerson));
    setNewName('');
  }

  const handlerChangeInput = (event) => setNewName(event.target.value)
  
  return (
    <> 
      <Title title={"Phonebook"}/>
      <Form onSubmit={handlerAddPerson} value={newName} onChange={handlerChangeInput} />
      <hr />
      <Title title={'Numbers'}/>
      <TotalList data={persons}/>
      
    </>
  )
}

export default App
