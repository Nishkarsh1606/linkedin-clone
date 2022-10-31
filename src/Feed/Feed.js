import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import Feedpostoptions from './feedpostoptions'
import Posts from './Posts'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import VideoIcon from '@mui/icons-material/VideoCall'
import EventIcon from '@mui/icons-material/CalendarMonth'
import ArticleIcon from '@mui/icons-material/Article'

function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{

    },[])

    const sendPost=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='feed'>
            <div className="feed_postcontainer">
                <div className="feedinput">
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder='Start a post' />
                        <button onClick={sendPost} type="submit">Send</button>
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
            <Posts userName={'Nishkarsh'} userEmail={'nishkarsh2912'} userPost={'Hello World'}/> 
            {
                posts.map(post => {
                    <Posts />
                })
            }
        </div>
    )
}

export default Feed