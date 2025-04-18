import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const seeNotification = ( data ) => {
    setNotification(data)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  //const anecdoteById = (id) =>    anecdotes.find(a => a.id === id)

  /*const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }*/
  const style = {
    margin: 10,
  }

  const styleNoti = {
    margin:20,
    padding: 10,
    border: "3px solid green",
    borderRadius: 10,
    background: 'lightgray',
    color: 'darkgreen'
  }
  return (
    <div>
      <h1 >Software anecdotes</h1>
      
      <Router>
        <div>
          <Link style={style} to="/" >anecdotes</Link>
          <Link style={style} to="/create">create new</Link>
          <Link style={style} to="/about">about</Link>
        </div>

        <Routes>
          <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />}/>
          <Route path='/anecdote/:id' element={<Anecdote anecdotes={anecdotes} />}/>
          <Route path='/create' element={<CreateNew addNew={addNew} seeNotification={seeNotification} />}/>
          <Route path='/about' element={<About />}/>
        </Routes>

        <Footer />
        <br />
        {
          notification === '' ? null : <span style={styleNoti}>{notification}</span>
        }

      </Router>

    </div>
  )
}

export default App
