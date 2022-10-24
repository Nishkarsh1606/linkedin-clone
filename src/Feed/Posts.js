import React from 'react'
import './Posts.css'
import { Avatar } from '@mui/material'
import Feedpostoptions from './feedpostoptions'
import LikeIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import ShareIcon from '@mui/icons-material/Share'
import SendIcon from '@mui/icons-material/Send'
import {useState} from 'react'



function Posts({userName,userEmail,userPost}) {
    return (
        <div className="postContainer">
            <div className="postHeader">
                <Avatar />
                <div className="userInfo">
                    <h1>{userName}</h1>
                    <h3>{userEmail}</h3>
                </div>
            </div>
            <div className="postBody">
                <p>{userPost}</p>
            </div>
            <div className="postOptions">
                <Feedpostoptions color={'lightgray'} title={'Like'} Icon={LikeIcon} />
                <Feedpostoptions color={'lightgray'} title={'Comment'} Icon={CommentIcon}/>
                <Feedpostoptions color={'lightgray'} title={'Share'} Icon={ShareIcon}/>
                <Feedpostoptions color={'lightgray'} title={'Send'} Icon={SendIcon}/>
            </div>
        </div>
    )
}

export default Posts