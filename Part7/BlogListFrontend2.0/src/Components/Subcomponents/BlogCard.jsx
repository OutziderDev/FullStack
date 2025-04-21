import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import blogService from '../../Services/blogService'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    const queryClient = useQueryClient()
    const { data: blogs, isLoading, isError } =  useQuery({
      queryKey: ['blogs'],
      queryFn: blogService.getAll,
      staleTime: 0
    })  

    
    /* Mutaciones de Tanstack */
    const handleLikeMutation = useMutation({
      mutationFn: (selectedBlog) => {
        const updateLikesBlog = {...selectedBlog, likes: selectedBlog.likes + 1 }
        return blogService.update(selectedBlog.id,updateLikesBlog)
      },
      onSuccess: () => { queryClient.invalidateQueries({queryKey: ['blogs']})}
    })

    const deleteBlogMutation = useMutation({
      mutationFn: blogService.deleteBlog,
      onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['blogs']})}
    })

    /* Funciones */
    /* const handleLikeBlog =  (selectedBlog) => {     
      handleLikeMutation.mutate(selectedBlog)
    } */
    
   /*  const deleteBlog = async (selectedBlog) => { 
      if (window.confirm(`seguro? desea eliminar: ${selectedBlog.title}`)) {
        deleteBlogMutation.mutate(selectedBlog.id)
      }
    }  */
    
    if ( isLoading) return <p className='text-center text-7xl text-white font-bold'> Cargando los datos...</p>
    if (isError) return <p>Ocurrio un error, intentelo mas tarde</p>
    
    //Ordenar
    blogs.sort((primary,secundary)=> secundary.likes - primary.likes)
    //traer data de usuario
    const userData = JSON.parse(window.localStorage.getItem('loggedBlogUser'))
    
    return (        
        blogs.map((blog, index) => (
          <Link to={`/blogs/${blog.id}`} key={index}>
            <article key={blog.id} className='dark:bg-gradient-to-tr from-sky-600 to-blue-900 border border-gray-300 dark:text-white dark:border-sky-400 p-4 rounded-md my-2  transition-all'>
                <div className="flex justify-between">
                    <h2 data-testid="blogTitle" className='text-2xl font-bold'>{blog.title}</h2>
                    <div className="flex gap-2">
                        {/* {
                            userData.name === blog.user.name ? (
                            <button data-testid="btnDelete" onClick={() => deleteBlog(blog)} className=" flex hover:bg-slate-100/10 w-8 items-center justify-center rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 dark:stroke-red-500 stroke-2 fill-none ">
                                    <path  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                            ) : ''
                        } */}
                        <button aria-label="btnview" data-testid="btnview" className="flex items-center justify-center rounded-lg hover:bg-slate-100/10 w-8">                      
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="size-6 stroke-black dark:stroke-white fill-none stroke-2">
                              <path  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>                          
                        </button>

                    </div>
                </div>

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
            </article> 
          </Link>                
        ))          
    )
}

export default BlogCard