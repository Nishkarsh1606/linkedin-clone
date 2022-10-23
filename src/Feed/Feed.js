import React from 'react'
import Feedpostoptions from './feedpostoptions'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'


function Feed() {
    return (
        <div className='feed'>
            <div className="feed_postcontainer">
                <div className="feedinput">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" placeholder='Start typing'/>
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed_postoptions">
                </div>
            </div>
        </div>
    )
}

export default Feed