import React, { useEffect, useState } from 'react'


function TopSect({ socket, chat }) {

    const [userName,setUserName]=useState("")
    const [avatar,setAvatar]=useState("")

    useEffect(()=>{
        setUserName(localStorage.getItem("userName"))
        setAvatar(localStorage.getItem("avatar"))
        socket.on('chatDisc', ()=>{setUserName("");setAvatar("");})
    },[socket,chat])

  return (
    <div className='min-h-[35px] h-[35px] shadow-[0_10px_7.5px_2px_#ccddff] shadow-[#ccddff] overflow-x-hidden w-full flex z-[102] justify-between'>
        <div className='flex h-full w-auto items-center justify-start bg-white px-5 rounded-full border border-4 border-lime-500 text-lg'>
            <div className='line-clamp-1'>
            <span>You are chatting as: </span>&nbsp;<span className='font-bold'>{userName}</span>
            </div>
        </div>
        <div className='h-full min-w-[120px] flex itmes-center justify-center'>
            <button onClick={()=>{socket.emit('disconnect')}} className='min-w-full max-w-full border-2 border-red-500 hover:bg-red-500 text-center text-red-500 hover:text-white font-semibold'>Disconnect</button>
        </div>
    </div>
  )
}

export default TopSect