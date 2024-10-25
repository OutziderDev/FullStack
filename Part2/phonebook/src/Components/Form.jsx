const Form = ({onSubmit,value,onChange}) =>  
    <form onSubmit={onSubmit}>
        <input type="text"
            id="form"
            value={value}
            onChange={onChange}
        />
        <button id="send" type="submit">add</button>
    </form>      

export default Form;