import React, { useState } from 'react'
import ChatRight from '../desktop/chatRight/page'
import ChatLeft from '../desktop/chatLeft/page'

function MobileHome({ socket }) {

    const [chat,setChat] = useState(false)

  return (
    <div className='h-screen w-full bg-[#ccddff] text-black'>
        <div className='absolute top-[2.5%] left-[2.5%] h-[95%] w-[95%] flex justify-between overflow-x-scroll'>
            {!chat && <ChatLeft socket={socket} chat={chat} setChat={setChat} />}
            {chat && <ChatRight socket={socket} chat={chat} />}
        </div>
    </div>
  )
}

export default MobileHome