const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ exercises }) => <p><b>Total of {exercises.reduce((acc,part)=>{return acc+part.exercises},0)} Exercises</b></p>
  
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => parts.map((part) => <Part key={part.id} part={part}/>) 

const Course = ({courses}) => {
  return(
    <>
      { 
        courses.map((course)=>{ 
          return(
            <div key={course.id}>
            <Header  course={course.name}/>
            <Content  parts={course.parts}/>
            <Total exercises={course.parts}/>
            </div>
          )
        }  
        )
      }  
    </>
  )
}

const App = () => {
  const courses = [
    {
    id:1, 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      },
      {
        name:"Redux",
        exercises:11,
        id:4
      }
    ]
    },
    {
      id:2,
      name: 'Node.js',
      parts: [
        {
          name:'Routing',
          exercises: 3,
          id:1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id:2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App
