import React from 'react'
import './Assets/Body.css'
import dp from '../../images/dp.jpg'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Messaging from './SubComponents/Messaging';
import BottomMenu from './SubComponents/BottomMenu';

const Body = () => {
    return (
        <div className="body-container">
            <div className="body-profile-section">
                 <div className="profile-div">
                    <div className="profile-div-top">
                        <img src={dp} height="80" className="dp-img"/>
                        <h4>John Doe</h4>
                        <b>React developer at ABC</b>
                    </div>
                    <div className="profile-div-bottom">
                        <div className="view-details">
                            <p>Who viewed your profile</p>
                            <p className="number-text">120</p>
                        </div>
                        <div className="view-details">
                            <p>Views of your post</p>
                            <p className="number-text">1200</p>
                        </div>
                        <div className="my-items-container">
                            <BookmarkIcon fontSize="small" style={{color: 'gray'}}/>
                            <p>My items</p>
                        </div>  
                    </div>
                 </div>
            </div>
            <div className="body-post-section">
                 <div className="post-div">
                    <h4>Posts component</h4>
                 </div>
            </div>
            <div className="body-news-section">
                 <div className="news-div">
                    <p className="news-div-heading">LinkedIn News</p>
                 </div>
            </div>
            <Messaging/>
            <BottomMenu/>
        </div>
    )
}

export default Body
