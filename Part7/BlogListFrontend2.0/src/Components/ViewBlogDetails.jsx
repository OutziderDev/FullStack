import { useMutation,useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import  blogService  from "../Services/blogService"

const ViewBlogDetails = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const addCommentMutation = useMutation({
    mutationFn: ( {commemts,id} ) => blogService.addComment( {commemts} , id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['blogs'] })
    }

  })
  /* Mutaciones de Tanstack */
  /* const handleLikeMutation = useMutation({
    mutationFn: (selectedBlog) => {
      const updateLikesBlog = {...selectedBlog, likes: selectedBlog.likes + 1 }
      return blogService.update(selectedBlog.id,updateLikesBlog)
    },
    onSuccess: () => { queryClient.invalidateQueries({queryKey: ['blogs']})}
  })

  const deleteBlogMutation = useMutation({
    mutationFn: blogService.deleteBlog,
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['blogs']})}
  }) */

  /* Funciones */
  /* const handleLikeBlog =  (selectedBlog) => {     
    handleLikeMutation.mutate(selectedBlog)
  } */
  
 /*  const deleteBlog = async (selectedBlog) => { 
    if (window.confirm(`seguro? desea eliminar: ${selectedBlog.title}`)) {
      deleteBlogMutation.mutate(selectedBlog.id)
    }
  }  */

  const blogs= queryClient.getQueryData(['blogs'])
  
  if (!blogs) {
    return <p className="text-4xl text-center font-bold pt-52 dark:text-sky-400">Loading blogs from cache...</p>  
  }

  const blog = blogs.find( blog => blog.id.toString() === id)

  const sendComment = (e) => {
  e.preventDefault()
  const comment = e.target[0].value

  addCommentMutation.mutate( {
    commemts: comment,
    id: blog.id 
  })

  e.target[0].value = '' 
}
  
  return(
    <div>
      <h1 className="text-center font-bold text-5xl dark:text-white pt-8">{blog.title}</h1>
      <div className="flex mt-8">
        
        <div className="dark:text-white text-2xl relative border-2 border-sky-500 p-8 pt-12 rounded-sm">
          <p className="dark:text-white text-3xl font-bold text-center absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-sky-950 rounded-sm px-2">
            Info:
          </p>
          <p>Author: <strong>{blog.author}</strong></p>
          <p>Direction: <strong>{blog.url}</strong></p>
        </div>

        <div className="dark:text-white text-2xl relative border-2 border-red-500 p-8 pt-12 rounded-sm ml-10">
          <p className="dark:text-white text-3xl font-bold text-center absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-sky-950 px-2">
            Likes:
          </p>
          <p>Total: <strong>{blog.likes}</strong></p>
        </div>

      </div>

      <div className="dark:text-white  font-bold mt-5" >
        Comments:
        <div>
          <form className="flex flex-row gap-4" onSubmit={sendComment}>    
            <input 
              type="text" 
              placeholder="Write a new comment" 
              className="rounded-sm text-gray-500 border-2 border-gray-300 focus:outline-none focus:border-green-500 p-2 w-full"
            />
            <button className="bg-green-500 p-1 text-white text-center rounded-sm">Send Comment</button>
          </form>
        </div> 
        <ul className="flex w-full flex-col gap-2 text-2xl">
          {blog.commemts.map((comment, index) => (
            <li key={index} className="border-2 border-sky-500 p-2 mt-2 rounded-sm">
              • {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

{/* <div className={`animate-fadeIn ${cardVisible === blog.id ? "block" : "hidden"} border-t p-1 mt-1`}>
                    <p> Visita el blog en: <a href="#" className="hover:text-green-400 ml-2">{blog.url}</a> </p>
                    <p className="flex justify-between">
                        <span>Likes: <strong data-testid='viewCountLikes'>{blog.likes}</strong></span>
                         <button data-testid="btnlike" onClick={()=>handleLikeBlog(blog)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-none stroke-2 stroke-red-500 hover:fill-red-500 ml-2">
                                <path  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                         </button>
                    </p>
                    <p>Publishing by: <strong>{blog.user.name}</strong></p>
                </div> */}

{/* {
                            userData.name === blog.user.name ? (
                            <button data-testid="btnDelete" onClick={() => deleteBlog(blog)} className=" flex hover:bg-slate-100/10 w-8 items-center justify-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 dark:stroke-red-500 stroke-2 fill-none ">
                                    <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                            ) : ''
                        } */}

export default ViewBlogDetails