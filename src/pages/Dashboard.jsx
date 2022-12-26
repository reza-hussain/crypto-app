import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import './dashboard.scss'


const Dashboard = () => {
  return (
    <div className="dashboard-main" style={{'backgroundImage': 'url(https://source.unsplash.com/Q6UehpkBSnQ)'}}>
      <div className="section-left">
    
      </div>
      <div className="section-right">
        <div className="search">
          <input type="text" />
          <button><SearchOutlined style={{color: '#101010'}} /></button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard