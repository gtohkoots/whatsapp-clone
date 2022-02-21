import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import logo from './logo192.png'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function login() {

    const[{},dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className='login'>
        <div className='login_container'>
            <img src={logo} />
            <div className='login_text'>
                    <h1>Sign in to WhatsApp Clone</h1>
            </div>
            <Button type="submit" onClick={signIn}>
                    Sign in with Google
            </Button>
        </div>
        </div>
    )
}

export default login