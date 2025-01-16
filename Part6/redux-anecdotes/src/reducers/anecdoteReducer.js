import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers:{
    updateAnecdote(state,action){
      const anecdoteToUpdate = action.payload
      return [...state.map(note => note.id === action.payload.id ? anecdoteToUpdate : note)].sort((a,b)=> b.votes - a.votes)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote,setAnecdotes,updateAnecdote } = anecdoteSlice.actions

export const voteOf = (anecdotes) => {
  return async dispatch => {
    const newAnecdote = {...anecdotes,votes : anecdotes.votes + 1}
    const response = await anecdoteService.updateAnecdote(newAnecdote)
    dispatch(updateAnecdote(response))
    
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer