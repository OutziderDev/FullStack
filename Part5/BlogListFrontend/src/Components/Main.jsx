import PropTypes from 'prop-types';
import FormAddBlog from './Subcomponents/FormAddBlog';
import UserInfo from './Subcomponents/userInfo';
import BlogCard from './Subcomponents/blogCard';

const Main = ({blogs,user,handleLogout,setNotification,setBlogs}) => {

    return(
        <div className={`grid grid-cols-1 md:grid-cols-[35%,65%] gap-2 animate-fadeIn transition-all duration-500`} >

            <aside className='dark:text-white px-2 pt-2 '>
              <UserInfo user={user} handleLogout={handleLogout}/>
              
              <FormAddBlog setNotification={setNotification} blogs={blogs} setBlogs={setBlogs}/>  
            </aside>
            
            <section className='px-2' id='forBlogs'>
              <BlogCard blogs={blogs}/>
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