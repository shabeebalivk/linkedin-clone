import React from 'react'
import './Assets/Header.css'
import logo from '../../images/linkedin.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { Drawer, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DrawerComponent from './SubComponents/Drawer'

const Header = () => {

     const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });

        const toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
        };
    return (
       <>
          <div className="header">
             <div className="header-left">
                <img src={logo} alt height={34}/>
                <div className="search-container">
                    <div className="search-icon-container">
                         <SearchIcon fontSize="small" />
                    </div>
                    <input placeholder="Search"/>
                </div>
             </div>
             <div className="header-right">
                <div className="header-icons-container">
                     <HomeIcon fontSize="large"/>
                     <PeopleIcon fontSize="large"/>
                     <WorkIcon fontSize="large"/>
                     <ChatBubbleOutlineIcon fontSize="large"/>
                     <NotificationsIcon fontSize="large"/>
                     <div class="vl"></div>
                     <AppsIcon fontSize="large" onClick={toggleDrawer('right', true)} style={{cursor: 'pointer'}}/>
                </div>
             </div>
          </div>  
          <div className="header-mobile">
               <div className="header-mobile-dp-container">
                    <AccountCircleIcon fontSize="large"/>
               </div>
               <div className="header-mobile-search-container">
                    <div className="search-container">
                         <div className="search-icon-container">
                              <SearchIcon fontSize="small" />
                         </div>
                         <input placeholder="Search"/>
                    </div>
               </div>
               <div className="header-mobile-message-container">
                    <ChatBubbleOutlineIcon fontSize="large"/>
               </div>
          </div>
         
         
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
               <div>
                    <DrawerComponent/>
               </div>
          </Drawer> 
        </>
    )
}

export default Header
