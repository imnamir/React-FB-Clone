import { Avatar } from '@material-ui/core'
import React from 'react'

import './sidebar-row.scss'

function SidebarRow({title, Icon, image}) {
    return (
        <div className="sidebar-row">
            {image && <Avatar src={image} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
