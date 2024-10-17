import { useState } from 'react'

//Definiendo Componentes
const Button = ({onClick,Text}) => <button onClick={onClick}>{Text}</button>
const Title = ({title}) => <h2>{title}</h2>
const StatisticLine = ({textResult,data}) =><>{textResult}  {data}</>

const Statistics = (props) => {
  if(props.totalVotes === 0) return (<Title title={"No Feedback give"}/>)
  return(
    <>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><StatisticLine textResult={"Good"}/></td>
            <td><StatisticLine data={props.good}/></td>
          </tr>
          <tr>
            <td><StatisticLine textResult={"Neutral"}/></td>
            <td><StatisticLine data={props.neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine textResult={"Bad"}/></td>
            <td><StatisticLine  data={props.bad}/></td>
          </tr>
          
          <tr>
            <td><StatisticLine textResult={"All"}/></td>
            <td><StatisticLine  data={props.totalVotes}/></td>
          </tr>
          <tr>
            <td><StatisticLine textResult={"Average"} /></td>
            <td><StatisticLine data={props.func1}/></td>
          </tr>
          <tr>
            <td><StatisticLine textResult={"Positives"}/></td>
            <td><StatisticLine data={props.func2}/></td>
          </tr>
        </tbody>
      </table>
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
      <Title title={"Statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad} totalVotes={totalVotes} func1={scoreAverague()} func2={positivePercentage()} />
    </>
  )
}

export default App
