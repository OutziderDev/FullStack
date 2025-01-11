import { useSelector, useDispatch } from 'react-redux'
import {voteOf,createNote} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteOf(id))
  }
  const addNote = (e) => {
    e.preventDefault()
    const note = e.target.note.value
    dispatch(createNote(note))
    e.target.note.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => 
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input id='note' type='text'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App