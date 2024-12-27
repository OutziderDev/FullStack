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

export default {getAll , create}