import { JSX } from "react";

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface CoursePartProps {
  data: CoursePart[];
}

const Context = ({data}: CoursePartProps) : JSX.Element => {
  
  return(
    <>
      {data.map((part, index) => (
        <p key={index}>
          {part.name}: {part.exerciseCount}
        </p>
      ))}
    </>
  )
}

export default Context