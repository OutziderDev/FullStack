import PropTypes from 'prop-types';

const Login = ({handleLogin,setUsername,setPassword}) => {
    return(
        <>
            <form onSubmit={handleLogin} id='formLogin' className="bg-blue-100 animate-fadeIn dark:bg-transparent mt-20 p-5 flex flex-col max-w-xl mx-auto border-2 border-blue-300 rounded-lg shadow-md shadow-blue-300 dark:shadow-white" action="" >
                <label className='text-blue-600 font-bold dark:text-white ' htmlFor="username">Username:</label>
                <input className='my-3 rounded p-1 pl-2 outline outline-2  outline-sky-200 focus:outline-4  focus:outline-sky-500' 
                        type="text"
                        id='username'
                        name='username'
                        autoComplete='on'
                        placeholder='User'
                        onChange={(e) => setUsername(e.target.value)}
                />

                <label className='text-blue-600 font-bold dark:text-white' htmlFor="password">Password:</label>
                <input className='my-3 rounded p-1 pl-2 outline outline-2  outline-sky-200 focus:outline-4  focus:outline-sky-500'
                    type="password"
                    id="password"
                    name="password"
                    placeholder='1234'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="mt-6 block text-sky-400 border border-sky-400 rounded-md px-4 py-1 hover:bg-sky-400 hover:text-white font-bold"> Login</button>
            </form>
        </>
    )
}


Login.propTypes = {
    handleLogin: PropTypes.func.isRequired, 
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired
}; 

export default Login;