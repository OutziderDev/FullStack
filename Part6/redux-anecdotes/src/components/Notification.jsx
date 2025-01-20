import { useNotification } from "../hooks/useNotification"

const Notification = () => {
  const notification  = useNotification()
  console.log(notification);
  
  if (!notification) {
    return null
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 10
  }
  return (
    <div style={style}>
      {notification }
    </div>
  )
}

export default Notification