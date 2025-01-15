import { createSlice } from '@reduxjs/toolkit'

//const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers:{
    createNote(state,action){
      /*const content = action.payload
      const anecdote = {
         content,
        id: getId(),
        votes: 0
      }*/
      console.log('action', action.payload )
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
export default anecdoteSlice.reducer
/*const reducer = (state = initialState, action) => {
  //initialState.sort((a,b)=>{b.votes - a.votes})
  switch (action.type) {
    case 'VOTE':{
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNoteVote = {
        ...noteToChange,votes: noteToChange.votes + 1
      }
      return state.map(note => note.id !== id ? note : changedNoteVote)
    }
    case 'ADD': 
      return [...state,action.payload]

    default:
      return state
  }
}

export const voteOf = (id) => {
  return {
    type: 'VOTE',
    payload : {id}
  }
}

export const createNote = (note) =>{
  return {
    type: 'ADD',
    payload: {
      content: note,
      id: getId(),
      votes: 0,
    }
  }
}
export default reducer*/