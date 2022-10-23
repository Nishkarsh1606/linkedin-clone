import React from 'react'
import './feedpostoptions.css'

function Feedpostoptions({icon,title}) {
  return (
    <div className='feedpostoptions'>
        <div><img src={icon} alt={title}/></div>
        <div>{title}</div>
    </div>
  )
}

export default Feedpostoptions