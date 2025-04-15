interface InputData {
  target : number,
  data: number[]
}

interface Result { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (data: number[], target: number) : Result => {
  const periodLength = data.length
  const trainingDays = data.filter(traning => traning > 0).length
  const totalHours = data.reduce((sum, hours) => sum + hours, 0)
  const average = totalHours/ periodLength
  const success = average >= target

  // Definir rating
  let rating: number;
  let ratingDescription: string;
 
  if (average >= target) {
    rating = 3;
    ratingDescription = 'excellent, you met your goal!';
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else {
    rating = 1;
    ratingDescription = 'you need to put in more effort';
  }

  return { 
    periodLength,
    trainingDays, 
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercises([1 ,0, 2, 4.5, 0, 3, 1, 0, 4], 2));