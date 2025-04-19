import FormAddBlog from './Subcomponents/FormAddBlog';
import UserInfo from './Subcomponents/UserInfo';
import BlogCard from './Subcomponents/blogCard';

const Main = () => {

  return(
    <div className={`grid grid-cols-1 md:grid-cols-[35%,65%] gap-2 animate-fadeIn transition-all duration-500`} >

      <aside className='dark:text-white px-2 pt-2 '>
        <UserInfo />
        
        <FormAddBlog />  
      </aside>
      
      <section className='px-2' id='forBlogs'>
        <BlogCard />
      </section>

    </div>
  )
}

export default Main;