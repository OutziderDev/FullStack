import {useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(createNote(content))
    dispatch(setNotificationWithTimeout(`you create anecdote: ${content}`))
  }
  
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input id='note' type='text'/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm