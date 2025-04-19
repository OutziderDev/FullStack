import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user}),
  logout: () => {
    window.localStorage.removeItem("loggedBlogUser")
    set({ user: null})
  },
  restoreUser: () => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      set({ user: JSON.parse(loggedUserJSON)})
    }
  }
})
)