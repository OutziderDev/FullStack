import PropTypes from 'prop-types';


const UserInfo = ({ user,handleLogout }) => {
    return (
        <div className='flex flex-col border border-sky-300 p-4 space-y-2 rounded-md dark:bg-gradient-to-b from-sky-900 to-sky-700  '>
            <h2 data-testid='userInfo' className='text-center text-lg border-b-2 uppercase font-bold'> User Data</h2>
            <span className='font-bold'>Name: {user.name}</span>
            <p>blogs: 0</p>
            <button data-testid='btnLogout' onClick={handleLogout} className='p-2 bg-red-500 border border-red-600 rounded-md text-white hover:bg-red-600 hover:text-white'>
              Logout
            </button>
        </div>
    )
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
}

export default UserInfo