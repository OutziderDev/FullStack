
const calculateBmi = (altura:number, peso:number ): string => {
  const alturaCtm = altura/100
  const imc = peso / Math.pow(alturaCtm,2) 
  
  if (imc < 18.5) {
    return "Underweight"
  } else if (imc >= 18.5 || imc <= 24.9 ) {
    return "Normal (healthy weight)"
  } else if (imc >= 25 ){
    return "Overweight"
  } else if (imc >= 30){
    return "Obesity"
  }
}

console.log(calculateBmi(180, 74))