import React, { useState, useEffect } from 'react'
import Feedpostoptions from './feedpostoptions'
import Posts from './Posts'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import VideoIcon from '@mui/icons-material/VideoCall'
import EventIcon from '@mui/icons-material/CalendarMonth'
import ArticleIcon from '@mui/icons-material/Article'
import { getFirestore, collection, onSnapshot, addDoc, serverTimestamp, initializeFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app";


function Feed() {
    const firebaseConfig = {
        apiKey: "AIzaSyA85BYCasU9-a1AR0ZL_M2g0KrsCeU7XuY",
        authDomain: "linkedin-8ed21.firebaseapp.com",
        projectId: "linkedin-8ed21",
        storageBucket: "linkedin-8ed21.appspot.com",
        messagingSenderId: "556232310441",
        appId: "1:556232310441:web:1e5535f6d081e809c9f3b8"
    }
    const app=initializeApp(firebaseConfig)
    const db = getFirestore(app, {
        experimentalForceLongPolling: true,
        useFetchStreams: false,
    })
    const auth = getAuth(app)
    const collectionRef = collection(db, "posts")
    const provider = new GoogleAuthProvider()
    const [user] = useAuthState(auth);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        onSnapshot(collectionRef, (snapshot) => {
            setPosts(
                snapshot.docs.forEach((doc) => {
                    return ({ ...doc.data(), id: doc.id })
                })
            )
        })
    })

    const [input, setInput] = useState("")

    const sendPost = (e) => {
        e.preventDefault()
        setInput('')
        addDoc(collectionRef, {
            Author: 'Nishkarsh',
            postContent: input,
            createdAt: serverTimestamp()
        }).then(() => {
            console.log('post successful')
        }).catch((e) => {
            console.log(e)
            alert('Could not post')
        })
    }
    return (
        <div className='feed'>
            <div className="feed_postcontainer">
                <div className="feedinput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Start a post' />
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
            <Posts userName={'Nishkarsh'} userEmail={'nishkarsh2912'} userPost={'Hello World'} />
            <Posts userName={'Nishkarsh'} userEmail={'nishkarsh2912'} userPost={'Hello World'} />
            {/* {
                posts.map(post => {
                    <Posts />
                })
            } */}
        </div>
    )
}

export default Feed