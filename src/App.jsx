import { useState } from 'react'
import './App.css'
import axios from 'axios'
import ShowData from './showData'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null);
  const [city, setCity] = useState('')

  const fetchApi = async () => {
    if (city.length > 0) {
      try {
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }

        let reqOptions = {
          url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=3847b7288c22fe4414a00294ae8cce66`,
          method: "GET",
          headers: headersList,
        }

        let response = await axios.request(reqOptions)
        setWeatherData(response.data)
      }
      catch (e) {
        setError('Invalid City or Country ', e)
      }
    }
    else {
      setError('Enter City or Country Name')
    }
  }

  const handleChange = (e) => {
    const inputCity = e.target.value;
    if (inputCity.length > 0) {
      const capitalizedCity = inputCity[0].toUpperCase() + inputCity.slice(1)
      setCity(capitalizedCity)
    }
  }

  return (
    <>
      <h1>Weather Checker</h1>
      <h2>Project 3</h2>

      <div className="mainDiv">
        {error && <div className='red'>{error}</div>}
        <input className='cityInp' type="text" placeholder='Enter Your City Name' onChange={handleChange} />
        <button className='fetchButton' onClick={fetchApi}>Enter</button>
      </div>

      {weatherData && <ShowData data={weatherData} />}
    </>
  )
}

export default App
