import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
//import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {/* <Filter/>*/}
      <Notification/>
      <AnecdoteList />
      <AnecdoteForm/>
    </div>
  )
}

export default App