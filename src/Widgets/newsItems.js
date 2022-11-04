import React from 'react'
import './Widgets.css'
import CircleIcon from '@mui/icons-material/Circle';

function NewsArticles({headline,subheading}) {
  return (
    <div className='newsArticles'>
        <CircleIcon style={{color:'#0074b1',width:'1rem',marginRight:'1rem'}}/>
        <div className="newsContent">
        <p className='headline'>{headline}</p>
        <p className='subheading'>{subheading}</p>
        </div>
    </div>
  )
}

export default NewsArticles