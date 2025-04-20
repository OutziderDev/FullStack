 import Notification from './Components/Subcomponents/Notification'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useUserStore } from './store/userStore'
import ViewUserDetail from './Components/ViewUserDetail'
import ViewUser from './Components/ViewUser'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Login from './Components/Login'
import Main from './Components/Main' 
import { useEffect } from 'react'

function App() {
 
  const { user,restoreUser } = useUserStore()  

  useEffect(() => { // Check if user is logged
    restoreUser()
  }, [])

  /* if (!blog)  return  */

  return (
    
     <>
      <section className='w-full h-full'>
        {!user ? (
          <>
            <Login />
            <br />
            <br />
            <Notification />
          </>
          ) : (
          <Router>
            <Navbar/>
          
            <div className='container mx-auto '>
              <Routes>
                <Route path="/users" element={
                  <>
                    <Header/>
                    <ViewUser />
                  </>  
                  } 
                />
                <Route path='/users/:id' element={ <ViewUserDetail/> }/>
                <Route path="/" element={
                  <>
                    <Header/>
                    <Notification />
                    <Main />
                  </>  
                } />
              </Routes>
            </div >
          </Router>)
          
        }
      </section>
{/*       <Footer/>
 */}    </> 
  )
}

export default App
