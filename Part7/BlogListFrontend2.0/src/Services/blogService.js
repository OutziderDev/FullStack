import axios  from "axios"
const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newBlog => {
  const config ={
    headers:{ Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('loggedBlogUser')).token}`}
  }

  const response = await axios.post(baseUrl,newBlog,config)
  return response.data
}

const addComment = async (newComment, id) => {
  const config ={
    headers:{ Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('loggedBlogUser')).token}`}
  }

  const response = await axios.post(`${baseUrl}/${id}/comments`,newComment,config)
  return response.data
}

const update = async (id,updateBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`,updateBlog)
  return response.data
}

const deleteBlog = async (id) => {
  const config ={
    headers:{ Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('loggedBlogUser')).token}`}
  }
  const response = await axios.delete(`${baseUrl}/${id}`,config) 
  return response.data
}


export default {getAll , create, update, deleteBlog,addComment }