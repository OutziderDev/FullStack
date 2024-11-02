const Filter = ({value,onChange}) =>{ 
    return(
    <input
       type="text"
       value={value}
       onChange={onChange}
       placeholder='Mexico' 
       style={{ marginBottom:20}}
    />
    )
}

export default Filter;