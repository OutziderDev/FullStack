//import { useSelector, useDispatch } from 'react-redux'
import {voteOf} from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import {useQuery} from '@tanstack/react-query'
import { getAllAnecdotes } from '../services/anecdotes'
//import axios from 'axios'

const AnecdoteList = () => {
  //const dispatch = useDispatch()

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAllAnecdotes,//() => axios.get('http://localhost:3001/anecdotes').then(res => res.data),
    retry:false
  })

  if ( result.isLoading ) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const filteredAnecdote = result.data
  //const anecdotes = useSelector(state => state.anecdote)
  //const filter = ''
  //const filteredAnecdote = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))



  const vote = (obj,content) => {
      //dispatch(voteOf(obj))
      //dispatch(setNotificationWithTimeout(`you vote for: ${content}`,1000))
      console.log('vamos por aqui');
      
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