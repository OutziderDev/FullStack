import Notification from './Components/Subcomponents/Notification'
import { useNotificationStore } from './store/notificationStore'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Main from './Components/Main'

import blogService from './Services/blogService'
import loginService from './Services/loginService'

function App() {
  const [blog, setBlog] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const { setNotification } = useNotificationStore.getState()
 
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
      setUser(userFromLogin)
      setUsername('')
      setPassword('')
    } catch (error) {
      setNotification(error.response.data.error, 'warning')
    }
   
  } 

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null) 
  }

  if (!blog)  return 

  return (
    <>
      <Navbar/>
      <section className='container mx-auto mt-3'>
        <Header/>
        <Notification />
        {!user ? (
          <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
          ) : (
          <Main blogs={blog} setBlogs={setBlog} user={user} handleLogout={handleLogout}   />
          )
        }
      </section>
      <Footer/>
    </>
  )
}

export default App
