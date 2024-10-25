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

export default Course;