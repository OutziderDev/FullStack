import { setAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux'
import Filter from './components/Filter'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(notes => dispatch(setAnecdotes(notes)))
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Notification/>
      <AnecdoteList />
      <AnecdoteForm/>
    </div>
  )
}

export default App