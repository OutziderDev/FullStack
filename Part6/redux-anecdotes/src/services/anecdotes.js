import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAllAnecdotes = () => axios.get('http://localhost:3001/anecdotes').then(res => res.data)

export const createAnecdote = (newAnecdote) => axios.post(baseUrl,newAnecdote).then(r => r.data) 

/*const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


const createAnecdote = async (content) => {
  const objAnecdote = {
    content,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0
  }
  const response = await axios.post(baseUrl,objAnecdote)
  return response.data
}*/

const updateAnecdote = async (newAnecdote) => {
  const id = newAnecdote.id
  const response = await axios.put(`${baseUrl}/${id}`,newAnecdote)
  return response.data
}

export default {  createAnecdote, updateAnecdote }