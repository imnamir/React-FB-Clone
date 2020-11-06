import React from 'react'

import './feed.scss'
import MessageCenter from './message-center/MessageCenter'
import Post from './post/Post'
import StoryReel from './strory-reel/StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageCenter  />
            <Post 
                profilePic='https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png'
                image="https://images.unsplash.com/photo-1500239524810-5a6e76344a17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                username="username"
                timestamp="test timestamp"
                message="this works"
            />
             <Post 
                profilePic='https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png'
                username="username"
                timestamp="test timestamp"
                message="this works"
            />
        </div>
    )
}

export default Feed
