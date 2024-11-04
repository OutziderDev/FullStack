const SelectedCountry = ({data,isweatherlike}) => {
    const lang = Object.values(data.languages)
    //console.log(isweatherlike);
    const  urlImgICO = isweatherlike ? `https://openweathermap.org/img/wn/${isweatherlike.weather[0].icon}@2x.png` : '#'
    const temperature = isweatherlike ? isweatherlike.main.temp : ''
    const windspeed = isweatherlike ? isweatherlike.wind.speed : ''

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
        <section>
            <h3>Weather in {data.name.common}</h3>
            <p><b>Temperature:</b> {temperature} </p>
            <div>
                <img src={urlImgICO} alt="" />
            </div>
            <p><b>Wind:</b> {windspeed}</p>
        </section>
    </div>
    )
}

export default SelectedCountry;