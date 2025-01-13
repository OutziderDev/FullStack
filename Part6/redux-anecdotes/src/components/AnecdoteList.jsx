import { useSelector, useDispatch } from 'react-redux'
import {voteOf} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.note)
  const filter = useSelector(state => state.filter)
  const filteredAnecdote = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  filteredAnecdote.sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
      dispatch(voteOf(id))
    }
  return (
    filteredAnecdote.map(anecdote => 
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList