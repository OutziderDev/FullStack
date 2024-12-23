import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className='flex bg-yellow-50 p-3 text-yellow-700 max-w-2xl mx-auto -mb-12 tracking-wide font-bold pl-8 border-l-8 border-yellow-600 animate-fadeIn duration-100' >
        <svg   xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <p className='ml-4'>{message}</p>
    </div>
  )
}

Notification.propTypes = {
    message: PropTypes.object, 
}; 

export default Notification;