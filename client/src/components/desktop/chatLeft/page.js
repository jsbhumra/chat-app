import React, { useEffect, useState } from 'react'
import TopSect from './topSect'
import BottomSect from './bottomSect'

function ChatLeft({ socket, chat, setChat }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('userChange', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className='w-[calc(33%-5px)] h-full border flex flex-col justify-around'>
        <TopSect socket={socket} setChat={setChat} users={users} />
        <div className='w-4/5 h-[1px] ml-[10%] bg-[#bebebe]'></div>
        <BottomSect users={users} chat={chat} socket={socket} />
    </div>
  )
}

export default ChatLeft