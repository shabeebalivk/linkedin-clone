import React, { useState } from 'react'
import './Messaging.css'
import dp from '../../../images/dp.jpg'
import CreateIcon from '@material-ui/icons/Create';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Messaging = () => {
    const [messageBig, setMessageBig] = useState(false)
    return (
        <div className="messaging-container" style={{height: messageBig ? 480 : 45}}>
            <div className="messaging-top" onClick={()=> setMessageBig(!messageBig)}>
                <div className="messaging-top-left">
                    <img src={dp} height={40}/>
                    <b>Messaging</b>
                </div>
                <div className="messaging-top-right">
                    <CreateIcon fontSize="small"/>
                    <MoreHorizIcon fontSize="medium"/>
                    {messageBig ? 
                        <ExpandMoreIcon /> :
                        <ExpandLessIcon />
                    }
                </div>
            </div>
            <div className="message-bottom">
                <h4>Message component</h4>
            </div>
        </div>
    )
}

export default Messaging
