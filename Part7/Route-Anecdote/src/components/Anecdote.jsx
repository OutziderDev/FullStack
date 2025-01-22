import { useParams } from "react-router-dom"
import ProType from 'prop-types'

const style = {
  margin: 20
}
const Anecdote = ({ anecdotes }) => {
  const id = useParams().id  
  
  const anecdote = anecdotes.find((a) => a.id === Number(id))
  
  return (
    <div>
      <div style={style}>has {anecdote.votes} votes</div>
      <div style={style}>
        for more info see <a href={anecdote.info}>{anecdote.info}</a>
      </div>
    </div>
  )
}

export default Anecdote

Anecdote.propTypes = {
  anecdotes: ProType.array.isRequired
}