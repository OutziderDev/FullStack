import PropTypes from 'prop-types';


const UserInfo = ({ user,handleLogout }) => {
    return (
        <div className='flex flex-col border border-gray-300 p-4 space-y-2  '>
            <h2 className='text-center text-lg border-b-2 uppercase font-bold'> User Data</h2>
            <span className='font-bold'>Name: {user.name}</span>
            <p>blogs: 0</p>
            <button className='p-2 border border-red-600 rounded-md dark:text-white hover:bg-red-600 hover:text-white'
                     onClick={handleLogout}
            >Logout</button>
        </div>
    )
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
}

export default UserInfo