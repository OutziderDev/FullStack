import { useState } from "react"

//Componentes 
const Button = ({onClick,text}) => <button onClick={onClick}>{text}!</button>

const MostVoteAnecdote = ({points,anecdotes}) =>{
  let maxPoint =0;
  let numAnectote = 0; 

  for (let key in points) {
    if(points[key] > maxPoint){
      maxPoint = points[key];
      numAnectote = key;
    }
  }
  if(maxPoint === 0 ) return <div>Not vote yet</div>
  return(
    <div>{anecdotes[numAnectote]} <br />
     With: {maxPoint} votes.
    </div>
  )
}

function App() { 
  //Variables
  const [selected, setSelected] = useState(0);
  const [points,setPoints ]= useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //Funciones
  const handleNumberChange = () =>{
    const randomNumer = Math.floor(Math.random()*anecdotes.length);
    //console.log(points)
    setSelected(randomNumer);
  }

  const handleVoteIncrement = () =>{
    const newVoteObject = points
    newVoteObject[selected] += 1
    setPoints(newVoteObject)
  }

  return (
    <>
      <div>{anecdotes[selected]}
        <br /> This anecdote has: {points[selected]} votes
      </div>
      
      <br />
      <Button onClick={handleVoteIncrement} text={"Vote for this!"}/>
      <Button onClick={handleNumberChange} text={"Next Anecdote"}/>
      <hr/>
      <p><b>Anecdote with most votes</b></p>
      <MostVoteAnecdote points={points} anecdotes={anecdotes}/>
    </>
  )
}

export default App
