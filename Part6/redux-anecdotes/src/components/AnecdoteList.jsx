import { useSelector, useDispatch } from 'react-redux'
import {voteOf} from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdote)
  const filter = useSelector(state => state.filter)
  const filteredAnecdote = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  //filteredAnecdote.sort((a,b) => b.votes - a.votes)

  const vote = (obj,content) => {
      dispatch(voteOf(obj))
      dispatch(setNotificationWithTimeout(`you vote for: ${content}`,1000))
    }
  return (
    filteredAnecdote.map(anecdote => 
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote,anecdote.content)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList