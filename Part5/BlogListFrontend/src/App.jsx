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
  
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlog(blogs)
    }
    fetchBlogs()
  },[])
  
  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      //console.log('Username:',username);
      //console.log('Password:',password);
      const userFromLohin = await loginService.login({username, password})
      console.log('const user:',userFromLohin)
      setUser(userFromLohin)
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
          <Main blogs={blog} user={user} />
          )
        }
        <h3 className='text-white text-center mt-12 text-2xl'>Hola por acaaa</h3>
      </main>
    </>
  )
}

export default App
