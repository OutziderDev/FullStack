//import { setNotificationWithTimeout } from '../reducers/notificationReducer'
import { createAnecdote } from "../services/anecdotes"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSetNotification}  from '../hooks/useNotification'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useSetNotification()
  
  const newAnecdoteMutation = useMutation({
    mutationFn:createAnecdote,
    onSuccess:queryClient.invalidateQueries({queryKey: ['anecdotes']})
  })

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    
    if (content.length >= 5) {  
      newAnecdoteMutation.mutate({content})
      e.target.note.value = ''
      dispatch(`New anecdote added: ${content}`)
    }else{
      alert("need more than 4 character")
      e.target.note.value = ''
    }
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