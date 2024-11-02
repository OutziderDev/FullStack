const SelectedCountry = ({data}) => {
    console.log(data[0].languages);
    
    return(
    <div>
        <h2>{data[0].name.common}</h2>
        <p><b>Capital:</b> {data[0].capital}</p>
        <p><b>Area:</b> {data[0].area}</p>
        <p><b>Lenguages:</b></p>
        <ul>
            <li>algo</li>
        </ul>
        <div>
            <img src={data[0].flags.png} alt="" />
        </div>
    </div>
    )
}

export default SelectedCountry;