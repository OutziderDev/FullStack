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
            <button className="bg-green-500 p-1 text-center rounded-sm">Send Comment</button>
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

export default ViewBlogDetails