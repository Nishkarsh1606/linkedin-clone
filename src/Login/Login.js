import React from 'react'
import './Login.css'
import LinkedinLogo from '../assets/linkedinBig.png';
//sign in user with pop up - singinwith popup from firebase, auth, provider from firebase
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const signInWithGoogle = (e) => {
        signInWithPopup(auth, provider)
    }

    const signInWithEmail = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            //do nothing
        }).catch(()=>{
            alert(`Email and password don't match`)
        })
    }

    const register = (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            return alert('Please enter your name')
        }
        else {
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic
                })
            }).then(() => {
                alert('Successfully Signed Up!')
                dispatch(login({
                    email: auth.currentUser.email,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL,
                    uid: auth.currentUser.uid
                }))
            }).catch((error) => {
                alert(error)
            })
        }
    }

    return (
        <div className='Login'>
            {/* -------  Sign up section -------- */}
            <img src={LinkedinLogo} alt="" />
            <form action="" className='sign-up-form'>
                <input type="text" placeholder='Full Name (only required if registering for first time)*' onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <input type="url" placeholder='Profile Pic URL (Optional)' onChange={e => setProfilePic(e.target.value)} />
                <button type="submit" onClick={signInWithEmail}>Sign In</button>
                <button type="submit" onClick={register} className='register-btn'>Register Now</button>
            </form>
            {/* Sign in with google section  */}
            <div className="left-right-divider">
                <p>
                    or
                </p><br />
            </div>
            <div className="sign-in">
                <h3>Sign in with<span className='register-user' onClick={signInWithGoogle}> Google</span></h3>
            </div>
        </div>
    )
}
export default Login