import React, { useState } from 'react'
import ChatRight from './chatRight/page'
import ChatLeft from './chatLeft/page'

function DesktopHome({ socket }) {
  const [chat,setChat] = useState(false)

  return (
    <div className='h-screen w-full bg-[#e0e0e0] text-black'>
        <div className='absolute top-[2.5%] left-[2.5%] h-[95%] w-[95%] flex justify-between'>
            <ChatLeft socket={socket} chat={chat} setChat={setChat} />
            <div className='w-[1px] h-4/5 mt-[5%] bg-[#bebebe]'></div>
            <ChatRight />
        </div>
    </div>
  )
}

export default DesktopHome