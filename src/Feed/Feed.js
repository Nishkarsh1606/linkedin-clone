import React, { useState, useEffect } from 'react'
import Feedpostoptions from './feedpostoptions'
import Posts from './Posts'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import VideoIcon from '@mui/icons-material/VideoCall'
import EventIcon from '@mui/icons-material/CalendarMonth'
import ArticleIcon from '@mui/icons-material/Article'
import { onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore'
import { collectionRef,postsOrderedbyLatest } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")
    const user = useSelector(selectUser)

    //useEffect hook to get all posts when the app renders
    useEffect(() => {
        onSnapshot(postsOrderedbyLatest, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])

    console.log(posts.length)

    const sendPost = (e) => {
        e.preventDefault()
        addDoc(collectionRef, {
            Author: user.displayName,
            postContent: input,
            createdAt: serverTimestamp(),
            photoURL: user.photoURL || null,
            email: user.email
        }).then(()=>{
            setInput('')
        })
    }

    return (
        <div className='feed'>
            <div className="feed_postcontainer">
                <div className="feedinput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Start a post' />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_postoptions">
                    <Feedpostoptions Icon={ImageIcon} title={'Photo'} color={'skyblue'} />
                    <Feedpostoptions Icon={VideoIcon} title={'Video'} color={'orange'} />
                    <Feedpostoptions Icon={EventIcon} title={'Event'} color={'lightgray'} />
                    <Feedpostoptions Icon={ArticleIcon} title={'Write Article'} color={'teal'} />
                </div>
            </div>
            <Posts userName={'Nishkarsh'} userEmail={'nishkarsh2912'} userPost={'Hey there 👋, welcome to my open-linkedin build! Please do not spam the wall and be respectful to other users!'} />

            {
                console.log(posts)
            }
            {
                //code block where all posts will be rendered)
                posts.map(({id,data:{email,Author,postContent,photoURL}})=>{
                    return <Posts
                    key={id}
                    userEmail={email}
                    userName={Author}
                    userPost={postContent}
                    photoURL={photoURL}
                    />
                })
            }
        </div>
    )
}

export default Feed