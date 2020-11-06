import React from 'react'

import './story-reel.scss'
import Story from './story/Story'

function StoryReel() {
    return (
        <div className="story-reel">
            <Story image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" profileSrc="https://www.w3schools.com/howto/img_avatar.png" title="Lorem ipsum"/>
            <Story image="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg" profileSrc="https://www.w3schools.com/howto/img_avatar.png" title="Lorem ipsum"/>
            <Story image="https://st2.depositphotos.com/3347209/6125/i/450/depositphotos_61250691-stock-photo-crows-in-the-forest.jpg" profileSrc="https://www.w3schools.com/howto/img_avatar.png" title="Lorem ipsum"/>
            <Story image="https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=" profileSrc="https://www.w3schools.com/howto/img_avatar.png" title="Lorem ipsum"/>
            <Story image="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.png.img.png" profileSrc="https://www.w3schools.com/howto/img_avatar.png" title="Lorem ipsum"/>
        </div>
    )
}

export default StoryReel
