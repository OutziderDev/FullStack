const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ exercises }) =>  exercises.reduce((acc,part)=>{return acc+part.exercises},0)
  
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => parts.map((part,index) => <Part key={index} part={part}/>) 

const Course = ({course}) => {
  return(
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    id:1, 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name:"Redux",
        exercises:11
      }
    ]
  }

  return <Course course={course} />
}

export default App
