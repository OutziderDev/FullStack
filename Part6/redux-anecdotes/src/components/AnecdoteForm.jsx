import {useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNote = (e) => {
    e.preventDefault()
    const note = e.target.note.value
    dispatch(createNote(note))
    dispatch(setNotificationWithTimeout(`you create anecdote: ${note}`))
    e.target.note.value = ''
  }
  
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input id='note' type='text'/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm