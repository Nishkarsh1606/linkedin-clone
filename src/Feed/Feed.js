import React from 'react'
import Feedpostoptions from './feedpostoptions'
import './Feed.css'
import Posts from './Posts'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import VideoIcon from '@mui/icons-material/VideoCall'
import EventIcon from '@mui/icons-material/CalendarMonth'
import ArticleIcon from '@mui/icons-material/Article'

function Feed() {
    return (
        <div className='feed'>
            <div className="feed_postcontainer">
                <div className="feedinput">
                    <CreateIcon/>
                    <form>
                        <input type="text" placeholder='Start a post'/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_postoptions">
                    <Feedpostoptions Icon={ImageIcon} title={'Photo'} color={'skyblue'}/>
                    <Feedpostoptions Icon={VideoIcon} title={'Video'} color={'orange'}/>
                    <Feedpostoptions Icon={EventIcon} title={'Event'} color={'lightgray'}/>
                    <Feedpostoptions Icon={ArticleIcon} title={'Write Article'} color={'teal'}/>
                </div>
            </div>
            <Posts userName={'Nishkarsh'} userEmail={'nishkarsh2912'} userPost={'Hello World'}/>
        </div>
    )
}

export default Feed