import { useNavigate } from "react-router-dom"
import ProType from 'prop-types'
import { useField } from "../hooks/hooks"

const CreateNew = (props) => {
  const navigate = useNavigate()
  const {reset:resetContent, ...content} = useField('text')  
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetInfo, ...info } = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    props.seeNotification('Anecdote is add succesfull')
    navigate('/')
  }

  const handleReset = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  const style = {
    margin:5
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>          content      <input style={style} {...content}/>        </div>
        <div>          author       <input  style={style} {...author} />       </div>
        <div>          url for more info <input style={style} {...info} /></div>
        <button style={{width: "20%", cursor:"pointer", margin: 10}}>create</button>
        <button type="button" style={{cursor:"pointer", background:"pink",borderRadius:5}}  onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

export default CreateNew

CreateNew.propTypes = {
  addNew: ProType.func.isRequired,
  seeNotification: ProType.func.isRequired
}