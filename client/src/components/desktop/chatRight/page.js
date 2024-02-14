import React from 'react'
import BottomSect from './bottomSect'
import TopSect from './topSect'

function ChatRight({ socket, chat }) {
  return (
    <div className={`w-[calc(66%-5px)] h-full shadow-in flex flex-col justify-around ${!chat && "blur-sm"}`}>
      {/* <div className=> */}
        <TopSect />
        <BottomSect />
      {/* </div> */}
    </div>
  )
}

export default ChatRight