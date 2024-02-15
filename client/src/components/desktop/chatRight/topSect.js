import React, { useEffect, useState } from 'react'
import {isMobile} from 'react-device-detect';
import BottomSect from '../chatLeft/bottomSect';


function TopSect({ socket, chat, setShowUsers }) {

    const [userName,setUserName]=useState("")
    const [avatar,setAvatar]=useState("")

    useEffect(()=>{
        setUserName(localStorage.getItem("userName"))
        setAvatar(localStorage.getItem("avatar"))
        socket.on('chatDisc', ()=>{setUserName("");setAvatar("");})
    },[chat])

  return (
    <div className='min-h-[35px] h-[35px] shadow-[0_10px_7.5px_2px_#ccddff] shadow-[#ccddff] overflow-x-hidden w-full flex z-[102] justify-between px-3'>
        <div className='flex h-full w-auto items-center justify-start bg-white px-5 rounded-full border border-4 border-lime-500 text-lg'>
            <div onClick={()=>{isMobile && setShowUsers(true)}} className='line-clamp-1 items-center'>
            <span>You are chatting as: </span>&nbsp;<span className='font-bold'>{localStorage.getItem("userName")}</span>
            </div>
        </div>
        <div className={`h-full ${isMobile ? "min-w-[30px]" : "min-w-[120px]"} flex items-center justify-center`}>
            <button onClick={()=>{window.location.reload()}} className={`${isMobile ? "w-[32.5px] h-[32.5px] rounded-full" : "min-w-full max-w-full" } border-2 border-red-500 hover:bg-red-500 text-center text-red-500 hover:text-white font-semibold`}>{isMobile ? "❌" : "Disconnect"}</button>
        </div>
    </div>
  )
}

export default TopSect