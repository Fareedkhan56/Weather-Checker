import React from 'react'
import './App.css'
const showData = ({ data }) => {
    console.log(data)
    return (
        <div>
            <div className="data" style={{ transition: 'all .5s ease', left: 0 }}>
                <h2>{data.name}</h2>
                <p>Weather: {data.weather[0].description}</p>
                <p>Temperature: {data.main.temp}°C (Feels like: {data.main.feels_like}°C)</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Pressure: {data.main.pressure} hPa</p>
                <p>Wind: {data.wind.speed} m/s, {data.wind.deg}°</p>
                <p>Cloudiness: {data.clouds.all}%</p>
            </div>
        </div>
    )
}

export default showData
