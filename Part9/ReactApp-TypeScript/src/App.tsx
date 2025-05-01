import Context from './components/Content';
import Header from './components/Header'
import Total from './components/Total';

function App() {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <>
      <div>
      <Header name={courseName}/>
      <Context data={courseParts} />
      <Total data={courseParts}/>
    </div>
    </>
  )
}

export default App
