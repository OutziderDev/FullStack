import {useQuery,useMutation, useQueryClient} from '@tanstack/react-query'
import { getAllAnecdotes,updateAnecdote } from '../services/anecdotes'
import {useSetNotification} from '../hooks/useNotification'

const AnecdoteList = () => {
  const queryClient = useQueryClient()
  const dispatch = useSetNotification()

  const newMutation = useMutation({
    mutationFn:updateAnecdote,
    onSuccess: queryClient.invalidateQueries({queryKey: ['anecdotes']}),
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAllAnecdotes,
    retry:false
  })

  if ( result.isLoading ) {
    return <div>anecdote service not available due to problems in server</div>
  }
  
  const filteredAnecdote = result.data
  //const anecdotes = useSelector(state => state.anecdote)
  //const filter = ''
  //const filteredAnecdote = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const vote = (anecdote) => {
      newMutation.mutate({...anecdote,votes: anecdote.votes + 1})
      dispatch(`You vote for: ${anecdote.content}`)
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