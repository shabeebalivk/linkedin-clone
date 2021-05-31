import React from 'react'
import './BottomMenu.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
 import NotificationsIcon from '@material-ui/icons/Notifications';

const BottomMenu = () => {
    return (
        <div className="bottom-menu-container">
            <div className="single-menu">
                <HomeIcon fontSize="large" className="current-active-menu"/>
                <b>Home</b>
            </div>
            <div className="single-menu">
                <PeopleIcon fontSize="large" className="not-active-menu"/>
                <b>My Network</b>
            </div>
            <div className="single-menu">
                <AddBoxIcon fontSize="large" className="not-active-menu"/>
                <b>Post</b>
            </div>
            <div className="single-menu">
                <NotificationsIcon fontSize="large" className="not-active-menu"/>
                <b>Notifications</b>
            </div>
            <div className="single-menu">
                <WorkIcon fontSize="large" className="not-active-menu"/>
                <b>Jobs</b>
            </div>
        </div>
    )
}

export default BottomMenu
