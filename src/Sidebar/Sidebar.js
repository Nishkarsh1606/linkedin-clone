import { Avatar } from '@mui/material'
import Background from '../assets/bg-gradient.jpg'
import React from 'react'
import './Sidebar.css'
import '../css/tailwind-output.css'

function Sidebar() {
  const recentItem=(topic)=>(
    <div className="sidebar_RecentItem">
    <p><span className='hashtag'>#</span>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar_topcard">
        <img src={Background} alt="" className='background' />
        <Avatar/>
        <h3>Nishkarsh</h3>
        <h4>Nishkarsh@gmail.com</h4>
        <div className="sidebarstats">
          <div className="sidebar_stat">
            <p>Who viewed your profile</p>
            <p className='sidebar_statNumber'>2500</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on Post</p>
            <p className='sidebar_statNumber'>2449</p>
          </div>
        </div>
      </div>
      <div className="recents mt-10 ">
        <div className="recentItems">
        <p>Recent</p>
        {recentItem('React')}
        {recentItem('CS')}
        {recentItem('Biz')}
        {recentItem('VC')}
        </div>
      </div>
    </div>
  )
}

export default Sidebar