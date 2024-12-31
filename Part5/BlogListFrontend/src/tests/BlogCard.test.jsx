import {render, screen} from '@testing-library/react'
import Blog from '../Components/Subcomponents/BlogCard'

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

afterEach(() => {
  window.localStorage.clear();
});

test('renders blog title and author, but not URL or likes by default', () => {
  render(<Blog blogs={mockBlogs} setBlog={() => {}} />);
  //screen.debug()
  // Verificar que el título y el autor se muestren
  expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
  expect(screen.getByText(/Publishing by:/i)).toBeInTheDocument();
  expect(screen.getByText('Test Author')).toBeInTheDocument();
  // Verificar que la URL y los likes NO se muestren inicialmente
  expect(screen.queryByText('Visita el blog en: https://example.com')).not.toBeInTheDocument();
  expect(screen.queryByText('Likes: 5')).not.toBeInTheDocument();
});