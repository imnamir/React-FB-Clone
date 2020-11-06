import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './message-center.scss'

function MessageCenter() {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
    }
    return (
        <div className="message-center">
            <div className="top-sec">
                <Avatar />
                <form>
                    <input placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    {/* <input type="text"/> */}
                    <button type="submit" onClick={handleSubmit}> 
                        submit
                    </button>
                </form>
            </div>
            <div className="bottom-sec">
                <div className="message-center-options">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="message-center-options">
                    <PhotoLibraryIcon  style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message-center-options">
                    <InsertEmoticonIcon  style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageCenter
