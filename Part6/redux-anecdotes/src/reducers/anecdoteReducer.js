import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers:{
    createNote(state,action){
      //console.log('action', action.payload )
      state.push(action.payload)
    },
    voteOf(state,action){
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      if (noteToChange) {
        noteToChange.votes++
      }  
      state.sort((a,b)=>b.votes-a.votes)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createNote, voteOf,appendAnecdote,setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer