import React, { useState, useEffect } from 'react'
import BottomSect from './bottomSect'
import MiddleSect from './middleSect'
import TopSect from './topSect'
import {isMobile} from 'react-device-detect';
import UsersMobile from './usersMobile';

function ChatRight({ socket, chat }) {
  const [showUsers,setShowUsers]=useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('userChange', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className={`${isMobile ? "w-full" : "w-[calc(66%-5px)] min-w-[400px]"} h-full flex flex-col ${showUsers ? "justify-start" : "justify-around"} ${!chat && "blur-sm pointer-events-none"}`}>
      {showUsers && <UsersMobile users={users} chat={chat} socket={socket} setShowUsers={setShowUsers} />}
      <div className={`h-full flex flex-col ${showUsers && "hidden"}`}>
      {chat && <TopSect socket={socket} chat={chat} setShowUsers={setShowUsers} />}
      <MiddleSect socket={socket} />
      {chat && <BottomSect socket={socket} />}
      </div>
    </div>
  )
}

export default ChatRight