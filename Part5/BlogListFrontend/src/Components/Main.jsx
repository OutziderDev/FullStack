import PropTypes from 'prop-types';
import FormAddBlog from './Subcomponents/FormAddBlog';
import UserInfo from './Subcomponents/userInfo';

const Main = ({blogs,user,handleLogout,setNotification,setBlogs}) => {

    return(
        <div className={`grid grid-cols-1 md:grid-cols-[35%,65%] gap-2 animate-fadeIn transition-all duration-500`} >

            <aside className='dark:text-white px-2 pt-2 '>
              <UserInfo user={user} handleLogout={handleLogout}/>
              
              <FormAddBlog setNotification={setNotification} blogs={blogs} setBlogs={setBlogs}/>  
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
    handleLogout: PropTypes.func.isRequired,
    setBlogs:PropTypes.func,
    setNotification:  PropTypes.func
}; 


export default Main;