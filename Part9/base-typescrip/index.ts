import express, {Request,Response} from 'express'
import { calculateBmi } from './bmiCalculator'

const app = express();
const PORT = 3002;

app.get('/bmi', (req: Request , res: Response ) : void => {
  
  const height = req.query.height
  const weight = req.query.weight

  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({error: 'malformatted parameters'})
  }

  const a = Number(height)
  const b = Number(weight)
  const bmi = calculateBmi(a,b)

   res.json({
    height: a,
    weight: b,
    bmi
  }) 
})

app.listen(PORT, () => {
  console.log('Server running on port: '+PORT);
})