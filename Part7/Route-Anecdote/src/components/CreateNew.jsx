import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProType from 'prop-types'

const CreateNew = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
    props.seeNotification('Anecdote is add succesfull')
    navigate('/')
  }

  const style = {
    gap:10,
    margin:20
  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form style={style} onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
        </div>
        <button>create</button>
      </form>
    </div>
  )

}

export default CreateNew

CreateNew.propTypes = {
  addNew: ProType.func.isRequired,
  seeNotification: ProType.func.isRequired
}