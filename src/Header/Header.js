import { React } from "react";
import './Header.css'
import LinkedinLogo from '../assets/Linkedin-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

function Header() {
    const dispath = useDispatch()
    const user=useSelector(selectUser)
    
    const logoutOutofApp = () => {
        dispath(logout())
        signOut(auth).then(() => {
            alert('Successfully Signed Out')
            window.location.reload()
        }).catch((error) => {
            alert(error)
        })
    }
    return (
        <div className="header">
            <div className="header_left">
                <img src={LinkedinLogo} alt="LinkedIn Logo" className="logo" /> {/*note how to import an image*/}

                <div className="header_search">
                    {/* Only use material icons after install material ui --note */}
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notification' Icon={NotificationsIcon} />
                {
                    user.photoURL?<Avatar src={user.photoURL} onClick={logoutOutofApp} className='profileAvatar'/>:
                    <Avatar src={user.photoURL} onClick={logoutOutofApp} className='profileAvatar'>{user.email[0]}</Avatar>
                }
            </div>
        </div>
    )
}

export default Header