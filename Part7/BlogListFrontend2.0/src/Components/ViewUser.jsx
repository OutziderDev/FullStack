import userService from '../Services/userService'
import { useQuery } from "@tanstack/react-query"

const ViewUser = () => {
  const { data: users,isLoading, isError  } =  useQuery({
        queryKey: ['users'],
        queryFn: userService.getAll
      })  
  console.log(users);
  
  if (isLoading) return <p className='text-center text-7xl text-white font-bold'> Cargando los datos...</p>
  if (isError) return <p>Ocurrio un error, intentelo mas tarde</p>
    
  return (
    <div>
      <h2 className="text-center text-4xl font-bold dark:text-sky-400">Users and Blogs Created</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 p-2">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-around p-4 rounded-lg shadow-md dark:shadow-white/10 bg-gradient-to-tr from-slate-200 dark:from-sky-600 dark:to-sky-400 dark:bg-gradient-to-tr hover:scale-105 transition-all cursor-pointer"
          >
            <img
              src={`/images/${index +1 }.webp`}
              alt={`User ${user.name}`}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold dark:text-sky-900">{user.name}</h3>
              <p className="text-lg font-bold dark:text-white/90 text-center">
                Blogs Created: <strong>{user.blogs.length}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewUser