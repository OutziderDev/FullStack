const Notification = ({message,toClass}) => {
    if (message === null) {
        return null
    }

    const forClass = toClass ? 'noteSucces' : 'noteError'
    return(
        <div className={forClass}>
            {message}
        </div>
    )
}

export default Notification;