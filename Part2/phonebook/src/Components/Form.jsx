const Form = ({onSubmit,valueName,valuePhone,onChangeName,onChangePhone}) =>  
    <form onSubmit={onSubmit}>
        <div style={{marginBottom:'5px'}}>
            <label htmlFor="name">Name:  </label>
            <input type="text"
                id="name"
                value={valueName}
                onChange={onChangeName}
            />
        </div>
        <div>
            <label htmlFor="phone">Phone: </label>
            <input type="text"
                id="phone"
                value={valuePhone}
                onChange={onChangePhone}
            />
        </div>
        <button id="send" type="submit">add</button>
    </form>      

export default Form;