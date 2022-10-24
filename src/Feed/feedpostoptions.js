import React from 'react'
import './feedpostoptions.css'

function Feedpostoptions({Icon,title,color}) {
  return (
    <div className='feedpostoptions'>
        <Icon style={{color:color}}/>
        <h4 style={{marginLeft:'5px'}}>{title}</h4>
    </div>
  )
}

export default Feedpostoptions