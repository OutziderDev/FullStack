import { createContext,useReducer } from "react";
import PropTypes from "prop-types"

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SEND":  return action.payload
  
    case "CLEAR": return ''

    default: return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = ({children}) => {
  const [notification,notificationDispatch] = useReducer(notificationReducer,"")

  return(
    <NotificationContext.Provider value={[notification,notificationDispatch]} >
      {children}
    </NotificationContext.Provider>
  )
}


export default NotificationContext

NotificationContextProvider.propTypes = {
  children: PropTypes.node.isRequired, 
}