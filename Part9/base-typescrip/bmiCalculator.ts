export const calculateBmi = (a:number, b:number ): string => {
  const alturaCtm = a/100
  
  const imc = b / Math.pow(alturaCtm,2) 
  
  if (imc < 18.5) {
    return "Underweight"
  } else if (imc >= 18.5 && imc <= 24.9 ) {
    return "Normal (healthy weight)"
  } else if (imc >= 25 && imc <= 29.9 ){
    return "Overweight"
  } else if (imc >= 30){
    return "Obesity"
  }

  return "Unknown"
}