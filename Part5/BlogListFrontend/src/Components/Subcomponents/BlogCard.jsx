import { useState } from "react"
import blogService from '../../Services/blogService'

const BlogCard = ({blogs ,setBlog}) => {
    const [cardVisible,setCardVisible] = useState(null)

    const handleCardVisibility = (id) => {
        setCardVisible(cardVisible === id ? null : id)
    }

    const handleLikeBlog = async (selectedBlog) => {     
        const updateLikesBlog = {...selectedBlog, likes: selectedBlog.likes + 1 }
        const response = await blogService.update(selectedBlog.id,updateLikesBlog)
        setBlog( (prevBlogs => prevBlogs.map(
            blog => blog.id === response.id ? response : blog)
            )
        )
    }

    return (  
        blogs.map(blog => (
            <article key={blog.id} className='dark:bg-gradient-to-tr from-sky-600 to-blue-900 border border-gray-300 dark:text-white dark:border-sky-400 p-4 rounded-md my-2  transition-all'>
                <div className="flex justify-between">
                    <h2 className='text-2xl font-bold'>{blog.title}</h2>
                    <button onClick={() => handleCardVisibility(blog.id)} className="flex items-center justify-center rounded-lg hover:bg-slate-100/10 w-8">
                        {
                          !cardVisible !== blog.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="size-6 stroke-black dark:stroke-white fill-none stroke-2">
                                <path  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>) :
                            (
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"   className="size-6 stroke-black dark:stroke-white fill-none stroke-2">
                                <path  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            )
                        }
                    </button>
                </div>

                <div className={`animate-fadeIn ${cardVisible === blog.id ? "block" : "hidden"} border-t p-1 mt-1`}>
                    <p> Visita el blog en: <a href="#" className="hover:text-green-400 ml-2">{blog.url}</a> </p>
                    <p className="flex justify-between">
                        <span>Likes: <strong>{blog.likes}</strong></span>
                         <button onClick={()=>handleLikeBlog(blog)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-none stroke-2 stroke-red-500 hover:fill-red-500 ml-2">
                                <path  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                         </button>
                    </p>
                    <p>Publishing by: <strong>{blog.user.name}</strong></p>
                </div>
            </article>               
        ))          
    )
}

export default BlogCard