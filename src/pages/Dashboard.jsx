import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import './dashboard.scss'


const Dashboard = () => {
  return (
    <div className="dashboard-main" style={{'backgroundImage': 'url(https://source.unsplash.com/Q6UehpkBSnQ)'}}>
      <div className="section-left">
        <div className="main-data">
          <h1>16°C</h1>
          <div>
            <h2>London</h2>
            <p>06:09 - Monday, 9 Sep 2019</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Cloudy</p>
          </div>
        </div>
      </div>
      <div className="section-right">

        {/* -------------SEARCH BOX-------------------- */}
        <div className="search">
          <input type="text" placeholder="Search Location"/>
          <button><SearchOutlined style={{color: '#101010', fontSize: '1.4rem'}} /></button>
        </div>

        <div className="weather-details">
          <h4>Weather Details</h4>
          <div className="grid">
            <GridBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export const GridBox = () => (
    <div className="grid-box">
      <h2>58</h2>
      <p>Cloudy</p>
    </div>
)

export default Dashboard