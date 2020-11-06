import { Avatar } from '@material-ui/core'
import React from 'react'
import './story.scss'

function Story({image, profileSrc, title}) {
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar className="prof-pic" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
