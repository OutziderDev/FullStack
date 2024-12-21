import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import blogService from './Services/blogService'

function App() {
  const [blogs, setBlogs] = useState()

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(blogs)
    }
    fetchBlogs()
  },[])

  if (!blogs) {
    return 
  }

  return (
    <>
      <Navbar/>
      <main className='container mx-auto max-w-6xl mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias reprehenderit soluta at ipsa hic tempore ad ea vero ab qui accusamus, id nam cum nostrum voluptates provident harum velit?</p>
          
          <section>

          </section>
        </div>
      </main>
    </>
  )
}

export default App
