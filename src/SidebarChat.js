import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom'

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
      const roomName = prompt("enter the name for the chat");
      if(roomName){
          db.collection("rooms").add({
              name: roomName
          });
      }
  }

  useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ?(
    <Link to={`/room/${id}`} key={id}>
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='sidebarChat_info'>
                <h2>{name}</h2>
                <p>Last Message...</p>
            </div>
        </div>
    </Link>
  ) : (
      <div className='sidebarChat' onClick={createChat}>
          <h2>Add New Chat</h2>
      </div>
  )
}

export default SidebarChat