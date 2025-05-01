import { JSX } from "react";
import { CoursePart } from "../types/CoursePart";

const Context = ({data}: { data: CoursePart[]}) : JSX.Element => {
  
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