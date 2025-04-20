import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const ViewUserDetail = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const users= queryClient.getQueryData(['users'])

  if (!users) {
    return <p className="text-4xl text-center font-bold pt-52 dark:text-sky-400">Loading users from cache...</p>  // ⚡ en caso de que aún no estén
  }
  const user = users.find( user => user.id.toString() === id)
  
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center mt-10 border-b-4 border-sky-500 pb-5">
        <img src="/images/1.webp" className="size-52 rounded-lg" alt="" />
        <div className="md:ml-20 text-center">
          <h2 className="text-7xl uppercase font-bold dark:text-sky-400 mt-10 md:mt-0 ">{user.name}</h2>
          <p className="text-2xl font-bold dark:text-white/90 text-center mt-10">
            Total blogs created: <strong>{user.blogs.length}</strong>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h1 className="my-8 text-5xl dark:text-sky-500 font-bold">Blog List: </h1>
        <div className="flex flex-col gap-4 pb-52">
          { user.blogs.map(blog => (
              <div key={blog.id} className="cursor-pointer  bg-gradient-to-tr from-slate-300 dark:bg-gradient-to-tr dark:from-sky-600 dark:to-sky-400 p-4 group rounded-sm flex  items-center justify-between">
                <h2 className="text-2xl font-bold dark:text-white">{blog.title}</h2>
                <svg className="size-10 group-hover:-rotate-45 transition-all dark:stroke-white"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
              </div>
            ))
          }
        </div>      
      </section>
    </>
  )
}

export default ViewUserDetail