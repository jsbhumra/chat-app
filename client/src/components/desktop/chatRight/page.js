import React, { useState } from 'react'
import BottomSect from './bottomSect'
import MiddleSect from './middleSect'
import TopSect from './topSect'

function ChatRight({ socket, chat }) {

  

  return (
    <div className={`w-[calc(66%-5px)] h-full flex flex-col justify-around ${!chat && "blur-sm"}`}>
    {/* <div className={`w-[calc(66%-5px)] h-full flex flex-col justify-around`}> */}
      {chat && <TopSect socket={socket} chat={chat} />}
      <MiddleSect socket={socket} />
      {chat && <BottomSect socket={socket} />}
    </div>
  )
}

export default ChatRight