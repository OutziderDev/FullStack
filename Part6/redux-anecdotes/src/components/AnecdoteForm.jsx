import {useDispatch } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    const anecdote = await anecdoteService.createAnecdote(content)
    console.log(anecdote)
    dispatch(createNote(anecdote))
    dispatch(setNotificationWithTimeout(`you create anecdote: ${anecdote.content}`))
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