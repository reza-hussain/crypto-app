import React, { useEffect, useState } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import Loading from './Loading'
import axios from "axios";
import './dashboard.scss'

const url = 'http://api.weatherstack.com/current?access_key=b78eb4758285ce15cb52750cb01b8b99'

const Dashboard = () => {
  const [location, setLocation] = useState('Hyderabad')
  const [data, setData] = useState(null)

  const getWeather = (query) => {
    
    axios.get(`${url}&query=${query}`).then((response) => setData(response.data))
  
  }

  useEffect(() => {
    getWeather(location)
  }, [])

  useEffect(() => {
  
  }, [data])

  return (data !== null ? (
    <div className="dashboard-main" style={{'backgroundImage': 'url(https://source.unsplash.com/Q6UehpkBSnQ)'}}>
      <div className="section-left">
        
      </div>
      <div className="section-right">

        {/* -------------SEARCH BOX-------------------- */}
        <div className="search">
          <input type="text" placeholder="Search Location" onChange={(e) => setLocation(e.target.value)}/>
          <button onClick={() => getWeather(location) }><SearchOutlined style={{color: '#101010', fontSize: '1.4rem'}} /></button>
        </div>

        <div className="weather-details">
        <div className="main-data">
          <h1>{data.current.temperature}°C</h1>
          <div>
            <h2>{data.location.name}</h2>
            <p>06:09 - Monday, 9 Sep 2019</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>{data.current.weather_descriptions[0]}</p>
          </div>
        </div>
          <h4>Weather Details</h4>
          <div className="grid">
            <GridBox value={`${data.current.cloudcover}%`} details='Cloudy' />
            <GridBox value={`${data.current.humidity}%`} details='Humidity'/>
            <GridBox value={`${data.current.feelslike}%`} details='Feels Like'/>
            <GridBox value={`${data.current.visibility}%`} details='Visibility'/>
          </div>
        </div>
      </div>
    </div>
  ):(
   <div className="loading">
      <Loading />
   </div>
  ))
}

export const GridBox = ({value, details}) => (
    <div className="grid-box">
      <h2>{value}</h2>
      <p>{details}</p>
    </div>
)

export default Dashboard