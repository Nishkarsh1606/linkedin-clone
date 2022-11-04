import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import NewsArticles from './newsItems';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="header-section">
          <p>Linked News</p>
          <InfoIcon/>
        </div>
        <div className="newsItems">
          <NewsArticles headline={'Covid-19 in UK'} subheading={'Top News - 886 readers'}/>
          <NewsArticles headline={'Hello World Program'} subheading={'Lorem ipsum - 9099 readers'}/>
          <NewsArticles headline={'Tesla hits new highs'} subheading={'Lorem ipsum - 300 readers'}/>
          <NewsArticles headline={'Bitcoin Breaks $22k'} subheading={'Lorem ipsum - 8000 readers'}/>
          <NewsArticles headline={'Is Redux too good'} subheading={'Lorem ipsum - 6503 readers'}/>
        </div>
    </div>
  )
}

export default Widgets