import React, { useEffect, useState } from 'react'
import TopSect from './topSect'
import BottomSect from './bottomSect'
import {isMobile} from 'react-device-detect';

function ChatLeft({ socket, chat, setChat }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('userChange', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className={`${isMobile ? "w-full justify-center" : "w-[calc(33%-5px)] min-w-[400px] justify-start"} h-auto overflow-y-scroll flex flex-col`}>
        <TopSect socket={socket} chat={chat} setChat={setChat} users={users} />
        {!isMobile && <div className='w-4/5 h-[1px] ml-[10%] bg-[#bebebe]'></div>}
        {!isMobile && <BottomSect users={users} chat={chat} socket={socket} />}
    </div>
  )
}

export default ChatLeft