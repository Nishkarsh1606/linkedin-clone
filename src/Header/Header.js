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
import ProfileIcon from '../assets/nishkarsh-profile.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={LinkedinLogo} alt="LinkedIn Logo" className="logo" /> {/*note how to import an image*/}

                <div className="header_search">
                    {/* Only use material icons after install material ui --note */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                    <HeaderOption title='Home' Icon={HomeIcon}/>
                    <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
                    <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
                    <HeaderOption title='Messaging' Icon={ChatIcon}/>
                    <HeaderOption title='Notification' Icon={NotificationsIcon}/>
                    <Avatar src={ProfileIcon}/>
            </div>
        </div>
    )
}

export default Header