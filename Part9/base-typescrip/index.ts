import express, {Request,Response} from 'express'
import { calculateBmi } from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator'

const app = express();
app.use(express.json())
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

app.post('/exercises', (req :Request, res: Response)   => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || target === undefined) {
    res.status(400).json({ error: "parameters missing" });
    return;
  }

  const isValidArray = Array.isArray(daily_exercises) && daily_exercises.every(n => typeof n === 'number');
  const isValidTarget = typeof target === 'number';

  if (!isValidArray || !isValidTarget) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }

  const result = calculateExercises(daily_exercises, target);
  res.json(result);
})

app.listen(PORT, () => {
  console.log('Server running on port: '+PORT);
})