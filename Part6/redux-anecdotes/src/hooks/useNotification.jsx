import { useContext } from "react"
import NotificationContext from "../NotificationContext"

export const useNotification = () => {
  const cad = useContext(NotificationContext)
  return cad[0]
}

export const useSetNotification = () => {
  const notificationDispatch = useContext(NotificationContext)[1];

  return (message) => {
    notificationDispatch({ type: "SEND", payload: message });

    setTimeout(() => {
      notificationDispatch({ type: "CLEAR" });
    }, 5000);
  };
}