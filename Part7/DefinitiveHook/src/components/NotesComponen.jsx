import ProType from 'prop-types'
import { useField, useResource } from '../hook/index'

const NotesComponen = () => {
  const content = useField('text')
  const [notes, noteService] = useResource('http://localhost:3005/notes')


  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }

  return (
    <>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}
    </>    
  )
}

export default NotesComponen

NotesComponen.propTypes = {
  content: ProType.object,
  notes: ProType.array,
  noteService: ProType.object
}