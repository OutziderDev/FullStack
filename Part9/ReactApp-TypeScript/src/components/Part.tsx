import { JSX } from "react";
import { CoursePart } from "../types/CoursePart";

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
  
  switch (part.kind) {
    case "basic":
      return ( 
          <i>
            <div>{part.description}</div>
            <br />
          </i>
        )
    
    case "group":
      return ( 
          <i>
            <div>project exercises: {part.groupProjectCount}</div>
            <br />
          </i>
      )

    case "background":
      return (
        <i>
          <div>{part.description}</div>
          <div>submit to: {part.backgroundMaterial}</div>    
          <br /> 
        </i>        
      )

    default:
      break;
  }

  return ( <h3> nothing</h3>)
  
}

export default Part