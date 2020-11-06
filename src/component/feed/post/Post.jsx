import React from 'react'
import './post.scss'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-top-info">
                    <h3>{username}</h3>
                    <p>Timestamp..</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt=""/>
            </div>
            <div className="post-options">
                <div className="option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="option">
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className="option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
