import { useEffect, useState } from 'react'
import Notification from './Components/Subcomponents/Notification'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Login from './Components/Login'
import Main from './Components/Main'

import blogService from './Services/blogService'
import loginService from './Services/loginService'

function App() {
  const [blog, setBlog] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {// Fetch blogs
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlog(blogs)
    }
    fetchBlogs()
  },[])
  
  useEffect(() => { // Check if user is logged
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const userFromLogin = await loginService.login({username, password})
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(userFromLogin)) 
      console.log('const user:',userFromLogin)
      setUser(userFromLogin)
      setUsername('')
      setPassword('')
    } catch (error) {
      //console.log(error.response.data.erro);
      setErrorMessage(error.response.data.erro)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
   
  } 

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null) 
  }

  if (!blog) { return }

  return (
    <>
      <Navbar/>
      <main className='container mx-auto mt-3'>
        <Header/>
        <Notification message={errorMessage}/>
        {!user ? (
          <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
          ) : (
          <Main blogs={blog} user={user} handleLogout={handleLogout}  />
          )
        }
        <h3 className='text-white text-center mt-12 text-2xl'>Hola por acaaa</h3>
      </main>
    </>
  )
}

export default App
