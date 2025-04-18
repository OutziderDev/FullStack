import { create } from 'zustand'

export const useNotificationStore = create ( (set) => ({
  notification: { message: null, type: null},
  setNotification: (message, type) => {
    set({ notification: { message, type} })
    setTimeout(() => set({ notification: { message: null, type: null}}) , 3000);
  }
}))
/* npm install zustand
 */