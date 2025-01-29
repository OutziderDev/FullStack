import { useField, useResource } from '../hook/index'

const PersonComponent = () => {
  const name = useField('text')
  const number = useField('text')
  
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
  }

  return(
    <>
      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(p => <p key={p.id}>{p.name} {p.number}</p>)}
    </>
  )
}

export default PersonComponent