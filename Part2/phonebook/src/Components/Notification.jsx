const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    return(
        <div className="noteSucces">
            {message}
        </div>
    )
}

export default Notification;