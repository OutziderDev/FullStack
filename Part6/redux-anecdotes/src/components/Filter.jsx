import {setFilter} from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    //console.log(event.target.value)
    dispatch(setFilter(event.target.value))
  }
  const style= {
    marginBottom:15
  }

  return (
    <>  
      <label htmlFor="filter">filter    </label>
      <input style={style} onChange={handleChange} name="filter" type="text" />
    </>
  )
}

export default Filter