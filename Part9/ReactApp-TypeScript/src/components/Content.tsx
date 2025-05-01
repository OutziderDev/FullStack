import { CoursePart } from "../types/CoursePart";
import { JSX } from "react";
import Part from "./Part";

const Context = ({data}: { data: CoursePart[]}) : JSX.Element => {
  
  return(
    <>
      {data.map((part, index) => (
        <div>
          <b key={index}>
            {part.name}: {part.exerciseCount}
          </b>
          <Part part={part} />
        </div>
      ))}
    </>
  )
}

export default Context