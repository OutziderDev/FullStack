import { useNotificationStore } from '../store/notificationStore'
import loginService from '../Services/loginService'
import { useUserStore } from '../store/userStore'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setNotification } = useNotificationStore.getState()
  const { setUser } = useUserStore()  
  
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

  return(
    <div className=' translate-y-1/2'>
      <h1 className='text-center text-6xl text-blue-500 dark:text-white p-4 uppercase font-bold -skew-x-6 hover:-skew-x-0 transition-all ease-in-out'>Login</h1>
      
      <form onSubmit={handleLogin} id='formLogin' className="bg-blue-100 animate-fadeIn dark:bg-transparent p-5 flex flex-col max-w-xl mx-auto border-2 border-blue-300 rounded-lg shadow-md shadow-blue-300 dark:shadow-white" action="" >
        <label className='text-blue-600 font-bold dark:text-white ' htmlFor="username">Username:</label>
        <input className='my-3 rounded p-1 pl-2 outline outline-2  outline-sky-200 focus:outline-4  focus:outline-sky-500' 
                type="text"
                data-testid="inputUser"
                id='username'
                name='username'
                autoComplete='on'
                placeholder='User'
                onChange={(e) => setUsername(e.target.value)}
        />

        <label className='text-blue-600 font-bold dark:text-white' htmlFor="password">Password:</label>
        <input className='my-3 rounded p-1 pl-2 outline outline-2  outline-sky-200 focus:outline-4  focus:outline-sky-500'
            data-testid="inputPass"
            type="password"
            id="password"
            name="password"
            placeholder='1234'
            onChange={(e) => setPassword(e.target.value)}
        />

        <button data-testid='btnLogin' className="mt-6 block text-sky-400 border border-sky-400 rounded-md px-4 py-1 hover:bg-sky-400 hover:text-white font-bold"> Login</button>
      </form>
    </div>
  )
}

export default Login;