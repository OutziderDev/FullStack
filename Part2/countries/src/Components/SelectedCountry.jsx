const SelectedCountry = ({data}) => {
    const lang = Object.values(data.languages)
    
    return(
    <div>
        <h2>{data.name.common}</h2>
        <p><b>Capital:</b> {data.capital}</p>
        <p><b>Area:</b> {data.area}</p>
        <p><b>Lenguages:</b></p>
        <ul>
            { lang.map(resp=> <li key={resp}>{resp}</li>)}
        </ul>
        <div>
            <img src={data.flags.png} alt="" />
        </div>
    </div>
    )
}

export default SelectedCountry;