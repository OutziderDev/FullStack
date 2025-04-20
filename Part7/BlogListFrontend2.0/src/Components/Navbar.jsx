import { useUserStore } from "../store/userStore"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const { user, logout } = useUserStore()
  const [darkMode, setDarkMode] = useState(true)

  const handleToggle = () => {
      setDarkMode(!darkMode)
      document.documentElement.classList.toggle("dark", !darkMode);
  }
  
  return (
    <nav className="bg-slate-100 dark:bg-gray-800 shadow-md w-full animate-fadeIn transition-all duration-300 z-50 top-0 mb-2 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-blue-600 dark:text-sky-400 text-2xl font-bold"
            >
              FullStack Open
            </Link>
          </div>

          <div className="flex space-x-6 items-center">
            {/* <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link> */}
            <Link
              to="/users"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Users
            </Link>
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Blogs
            </Link>
            <a
              href="https://github.com/OutziderDev/FullStack/tree/main/Part7/BlogListFrontend2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Git
            </a>

            <div className="text-right">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={darkMode}
                  id="checkdarkmode"
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-sky-900 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-400 rounded-full peer dark:bg-slate-300 peer-checked:bg-slate-300 transition-colors duration-300 ease-in-out"></div>
                <span className="absolute left-0.5 top-0.5 bg-white dark:bg-sky-500 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-full"></span>
              </label>
            </div>

            <div className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ">
              {user.name}
            </div>

            <button onClick={logout} className=" text-white bg-red-500 rounded-md px-2 py-1 hover:bg-red-600">Logout</button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

/*import { useState } from "react";
import { BrowserRouter as Router,  Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true)

    const handleToggle = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle("dark", !darkMode);
    }

    return (
      <Router >
        <div className="">
          <Link to="/users">User</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      </Router>
       <nav
        id="navbar"
        className="bg-slate-100 dark:bg-gray-800 shadow-md w-full animate-fadeIn transition-all duration-300 z-50 top-0 mb-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-blue-600 dark:text-sky-400 text-2xl font-bold"
              >
                FullStack Open
              </a>
            </div>

            <div className="block lg:hidden">
              <button
                id="mobile-menu-button"
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                ☰
              </button>
            </div>

            <div className="hidden lg:flex lg:space-x-6 items-center">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Users
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Blogs
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Git
              </a>

              <div className="text-right">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer sr-only "
                    checked={darkMode}
                    id="checkdarkmode"
                    onChange={handleToggle}
                  />
                  <div className="w-11 h-6 bg-sky-900 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-400 rounded-full peer dark:bg-slate-300 peer-checked:bg-slate-300 transition-colors duration-300 ease-in-out"></div>
                  <span className="absolute left-0.5 top-0.5 bg-white dark:bg-sky-500 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-full"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div
          id="mobile-menu"
          className="hidden lg:hidden px-2 pt-2 pb-3 space-y-1"
        >
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Users
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Git
          </a>
        </div>
      </nav> 
    )
}


export default Navbar;*/