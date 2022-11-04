import { Avatar } from '@mui/material'
import Background from '../assets/bg-gradient.jpg'
import React from 'react'
import './Sidebar.css'
import '../css/tailwind-output.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidebar_RecentItem">
      <p><span className='hashtag'>#</span>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar_topcard">
        <img src={Background} alt="" className='background' />
        <Avatar src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h3>{user.displayName}</h3>
        <h4>{user.email}</h4>
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