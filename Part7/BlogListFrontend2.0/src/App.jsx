import { useEffect, useState } from 'react'
import Notification from './Components/Subcomponents/Notification'
import { useNotificationStore } from './store/notificationStore'
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
/*   const [notification, setNotification] = useState({message: null,type:null} )
 */  
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
    const { setNotification } = useNotificationStore.getState()

    try {
      const userFromLogin = await loginService.login({username, password})
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(userFromLogin)) 
      setUser(userFromLogin)
      setUsername('')
      setPassword('')
    } catch (error) {
      setNotification({message:error.response.data.error, type:'warning'})
      setTimeout(() => {
        setNotification({ message: null, type: null })
      }, 3000)
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
      <main className='container mx-auto mt-3'>
        <Header/>
        <Notification />
        {!user ? (
          <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
          ) : (
          <Main blogs={blog} setBlogs={setBlog} user={user} handleLogout={handleLogout} setNotification={setNotification}  />
          )
        }
      </main>
      <Footer/>
    </>
  )
}

export default App
