import { useState } from "react";
import blogService from "../../Services/blogService";
import PropTypes from 'prop-types';

const FormAddBlog = ({setNotification,setBlogs,blogs}) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [author, setAuthor] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  const handleAddBlog = async (e) => {
    e.preventDefault()
    try {
      const newBlog = {
        title,
        author,
        url
      }
      const blog = await blogService.create(newBlog)
      setTitle('')
      setUrl('')
      setAuthor('')
      setBlogs(blogs.concat(blog))
      setNotification({ message:"the new blog add succesfully", type:'success' })
      setTimeout(() => {
        setNotification({ message: null, type: null })
      }, 3000);
    } catch (error) {
      console.log(error)
      const msgError= error.response.data.error
      setNotification({ message: msgError, type: 'warning' })
      setTimeout(() => {
        setNotification({ message: null, type: null })
      }, 3000);
    }
  }

  return (
    <div className="mx-auto my-6">
      <h2 data-testid='btnAdd' id="accordion-heading">
        <button
          type="button"
          onClick={toggleAccordion}
          className="flex relative z-10 overflow-hidden dark:z-50 items-center justify-between w-full p-5 font-medium text-gray-500 border rounded-xl focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 border-green-500 dark:text-gray-100 hover:bg-green-100 dark:hover:bg-green-700 gap-3"
          aria-expanded={isOpen}
          aria-controls="accordion-body"
        >
          <span>Create New Blog</span>
          <svg
            className={`w-3 h-3 transition-transform transform ${ isOpen ? "" : "rotate-180" } shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-body"
        className={`p-5 -mt-2 ${isOpen ? "animate-fadeIn":""} border border-t-0 border-green-500 dark:bg-sky-950 ${isOpen ? "block" : "hidden"}`}
        aria-labelledby="accordion-heading"
      >
        <div className="mb-2 text-gray-500 dark:text-gray-100">
          <form id='formAddBlog' onSubmit={handleAddBlog} action="" className='flex flex-col space-y-2'>
            <label data-testid='labelTitle' htmlFor="title">Title:</label>
            <input data-testid='inputFormTitle' onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="dark:text-gray-900 rounded-md p-1 border border-green-500 active:right-2" id='title' name='title' placeholder="El rey Griego"/>

            <label id='labellikes' htmlFor="likes">Author:</label>
            <input data-testid='inputFormAuthor' onChange={(e)=> setAuthor(e.target.value)} value={author} type="text" className="dark:text-gray-900 rounded-md p-1 border border-green-500 active:right-2" id='likes' name='likes' placeholder="Alejandro Magno"/>

            <label id='labelurl' htmlFor="url">Url:</label>
            <input data-testid='inputFormUrl' onChange={(e)=> setUrl(e.target.value)} value={url} type="text" className="dark:text-gray-900 rounded-md p-1 border border-green-500 active:right-2" id='url' name='url' placeholder="www.historia.com"/>

            <button data-testid='btnSave' className='mt-3 rounded-md p-2 border border-green-500 hover:text-white hover:bg-green-500'>Save</button>
          </form>
        </div>
       
      </div>
    </div>
  );
}

FormAddBlog.propTypes = {
  setBlogs: PropTypes.func,
  
  blogs:PropTypes.array,
  setNotification: PropTypes.func
} 

export default FormAddBlog;
