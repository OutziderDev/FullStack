import { JSX } from "react";

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface CoursePartProps {
  data: CoursePart[];
}

const Total = ({data}: CoursePartProps) : JSX.Element => {
  const totalExercises = data.reduce((sum, part) => sum + part.exerciseCount, 0);
  return(
    <>
      <p style={{ fontWeight: "bold"}}>
        Number of exercises {totalExercises}
      </p>
    </>
  )
}

export default Total