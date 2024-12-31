import Blog from '../Components/Subcomponents/BlogCard'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockBlogs = [
  {
    id: 1,
    title: 'Test Blog Title',
    url: 'https://example.com',
    likes: 5,
    user: {
      "username": "testAuthor",
      "name": "Test Author",
      "id": "67607eb9960db6389eade40d"
    }
  },
];

beforeEach(() => {
  const userData = { name: 'Test Author' };
  window.localStorage.setItem('loggedBlogUser', JSON.stringify(userData));
});

test('renders blog title and author, but not URL or likes by default', () => {
  render(<Blog blogs={mockBlogs} setBlog={() => {}} />);
  //screen.debug()
  expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
  expect(screen.getByText(/Publishing by:/i)).toBeInTheDocument();
  expect(screen.getByText('Test Author')).toBeInTheDocument();
  //not show
  expect(screen.queryByText('Visita el blog en: https://example.com')).not.toBeInTheDocument();
  expect(screen.queryByText('Likes: 5')).not.toBeInTheDocument();
});

test('show url and likes when click button', async () => { 
  const mockHandler = vi.fn()
  
  render(<Blog blogs={mockBlogs} setBlog={mockHandler}/>)
  
  const user = userEvent.setup()
  const button = screen.getByTestId('btnview')
  const hiddenContent = screen.queryByText(/Visita el blog en: https:\/\/\example.com/)

  expect(hiddenContent).toBeNull()
  expect(screen.queryByText('Likes: 5')).not.toBeInTheDocument();

  await user.click(button)
  
  expect(screen.getByText(/Visita el blog en:/)).toBeInTheDocument()
  expect(screen.queryByText(/Likes:/i)).toBeInTheDocument();
 })

test('calls event handler twice when like button is clicked twice', async () => {
    const setBlog = vi.fn()
    const handleLikeBlog = vi.fn()

    render(<Blog blogs={mockBlogs} setBlog={setBlog} />)

    const user = userEvent.setup()
    const button = screen.getByTestId('btnlike')
    //screen.debug(button)
    user.click(button)
    user.click(button)
    console.log(handleLikeBlog);
    
    //expect(handleLikeBlog).toHaveBeenCalledTimes(2)
    expect(handleLikeBlog.mock.calls).toHaveLength(2)
})

 afterEach(() => {
  window.localStorage.clear();
});