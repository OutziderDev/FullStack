import { useState } from 'react'

//Definiendo Componentes
const Button = ({onClick,Text}) => <button onClick={onClick}>{Text}</button>
const Title = ({title}) => <h2>{title}</h2>
const Result = ({textResult,data}) => <p><b>{textResult}:</b>  {data}</p>

const Statistics = (props) => {
  return(
    <>
      <Title title={"Statistics"}/>
      <Result textResult={"Good"} data={props.good}/>
      <Result textResult={"Neutral"} data={props.neutral}/>
      <Result textResult={"Bad"} data={props.bad}/>
      <hr />
      <Title title={"More Info"}/>
      <Result textResult={"All"}       data={props.totalVotes}/>
      <Result textResult={"Average"}   data={props.func1}/>
      <Result textResult={"Positives"} data={props.func2}/>
    </>
  )
}


function App() {
  //Const de estados
  const [good, setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const [totalVotes,setTotalVotes] = useState(0);

  //Funciones Flechas
  const handleGoodClick = () => {
    setGood(good+1);      
    setTotalVotes(totalVotes+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setTotalVotes(totalVotes+1)
  }
  const handleBadClick = () => {
    setBad(bad+1);             
    setTotalVotes(totalVotes+1)
  }
  const positivePercentage  = () => {
    if(totalVotes === 0) return "0%"

    return ((good/totalVotes)*100) + " %";
  }
  const scoreAverague = () =>{
    if (totalVotes === 0) return "0%"
    const goodPoint = 1;
    const neutralPoint = 0;
    const badPoint = -1;

    const totalPoint = ((good * goodPoint) + (neutral * neutralPoint) + (bad * badPoint) )/ totalVotes

    return totalPoint +" %";
  }

  return (
    <>
      <Title title={"Give Feedback"}/>
      <Button Text={"Good"} onClick={handleGoodClick}/>
      <Button Text={"Neutral"} onClick={handleNeutralClick}/>
      <Button Text={"Bad"} onClick={handleBadClick}/>
      <hr />
      <Statistics good={good} neutral={neutral} bad={bad} totalVotes={totalVotes} func1={scoreAverague()} func2={positivePercentage()} />
    </>
  )
}

export default App
