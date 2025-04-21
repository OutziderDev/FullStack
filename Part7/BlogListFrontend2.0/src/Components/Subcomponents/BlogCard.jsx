import { useQuery, useQueryClient} from '@tanstack/react-query'
import blogService from '../../Services/blogService'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    const queryClient = useQueryClient()
    const { data: blogs, isLoading, isError } =  useQuery({
      queryKey: ['blogs'],
      queryFn: blogService.getAll,
      staleTime: 0
    })  

    
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
          
                        <button aria-label="btnview" data-testid="btnview" className="flex items-center justify-center rounded-lg hover:bg-slate-100/10 w-8">                      
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="size-6 stroke-black dark:stroke-white fill-none stroke-2">
                              <path  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                              <path  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>                          
                        </button>

                    </div>
                </div>
            </article> 
          </Link>                
        ))          
    )
}

export default BlogCard