import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebase'

function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("")
    const { roomId } = useParams()
    const [roomName, setRoomName]  = useState("")

    const sendMessage = (e) => {
        e.preventDefault()
        setInput("")
    }

    useEffect ( () => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            })
        }
    }, [roomId])

    useEffect ( () => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last Seen At ...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <div className='chat_message'>
                    <span className='chat_name'>Ketian Tu</span>
                    asdasdasdasdasdasdasdasads
                    <span className='chat_timeStamp'>6:00pm</span>
                </div>
                <div className={`chat_message ${true && "chat_receiver"}`}>
                    <span className='chat_name'>Ketian Tu</span>
                    Hey Guys
                    <span className='chat_timeStamp'>6:00pm</span>
                </div>
            </div>
            <div className='chat_footer'>
                <InsertEmoticon />
                <form>
                    <input type='text' placeholder='Type a Message' onChange={(e) => setInput(e.target.value)}></input>
                    <button type='submit' onClick={sendMessage}>send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat