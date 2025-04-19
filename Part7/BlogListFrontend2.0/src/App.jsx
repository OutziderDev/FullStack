import Notification from './Components/Subcomponents/Notification'
import { useUserStore } from './store/userStore'
import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Main from './Components/Main'


function App() {
 
  const { user,restoreUser } = useUserStore()  

  useEffect(() => { // Check if user is logged
    restoreUser()
  }, [])


  /* if (!blog)  return  */

  return (
    <>
      <Navbar/>
      <section className='container mx-auto mt-3'>
        <Header/>
        <Notification />
        {!user ? (
          <Login />
          ) : (
          <Main />
          )
        }
      </section>
      <Footer/>
    </>
  )
}

export default App
