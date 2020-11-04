import React from 'react'

import logo from '../../assets/facebook_emblem.png';
import './header.scss';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <header>
            <div className="header-left">
                <img className="logo" src={logo} alt=""/>
                <div className="search-box">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="header-center">
                <div className="options active">
                    <HomeIcon />
                </div>
                <div className="options">
                    <FlagIcon />
                </div>
                <div className="options">
                    <SubscriptionsIcon />
                </div>
                <div className="options">
                    <StorefrontIcon />
                </div>
                <div className="options">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <Avatar />
                    <h4>User Name</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </header>
    )
}

export default Header
