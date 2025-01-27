import {createSlice} from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: "",
  reducers: {
    setNotification(state,action){
      return action.payload
    },
    clearNotification() {
      return ""
    }
  }
})

export const setNotificationWithTimeout = (message, timeout = 3500) => {
  return (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  };
}

export const {setNotification,clearNotification} = notificationSlice.actions
export default notificationSlice.reducer