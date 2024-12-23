import PropTypes from 'prop-types';

const Main = ({blogs,user,handleLogout}) => {

    return(
        <div className={`grid grid-cols-1 md:grid-cols-[35%,65%] gap-2 animate-fadeIn transition-all duration-500`} >

            <aside className='dark:text-white px-2 pt-2 '>

              <div className='flex flex-col border border-gray-300 p-4 space-y-2'>
                <h2 className='text-center text-lg border-b-2 uppercase font-bold'> User Data</h2>
                <span className='font-bold'>Name: {user.name}</span>
                <p>blogs: 0</p>
                <button className='p-2 border border-red-600 rounded-md dark:text-white hover:bg-red-600 hover:text-white'
                        onClick={handleLogout}
                >Logout</button>
              </div>

              <div className='my-6 border border-gray-300 rounded-md p-4'>
                <form id='formAddBlog' action="" className='flex flex-col'>
                  <label htmlFor="title">Title:</label>
                  <input type="text" id='title' name='title' />

                  <label id='labelurl' htmlFor="url">Url:</label>
                  <input type="text" id='url' name='url' />

                  <label id='labellikes' htmlFor="likes">Likes:</label>
                  <input type="text" id='likes' name='likes' />

                  <button className='mt-3 rounded-md p-2 border border-green-500 hover:text-white hover:bg-green-500'>Save</button>
                </form>
              </div>
            </aside>
            
            <section className='px-2' id='forBlogs'>
              {
                blogs.map(blog => (
                  <article key={blog.id} className='border border-gray-300 dark:text-white dark:border-sky-400 p-4 shadow-botton dark:shadow-sky-400 rounded-sm my-2'>
                    <h2 className='text-2xl font-bold'>{blog.title}</h2>
                    <p>{blog.body}</p>
                  </article>
                ))
              }
            </section>

          </div>
    )
}

Main.propTypes = {
    blogs: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
}; 


export default Main;