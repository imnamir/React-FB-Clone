import React from 'react'

import logo from '../../assets/facebook_emblem.png';
import Button from '@material-ui/core/Button';

import { auth, provider} from '../../firebase/firebase-config';


import './login.scss'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result=> {
            console.log(result)
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <Button type="submit" onClick={signIn}> Sign In </Button>
        </div>
    )
}

export default Login
