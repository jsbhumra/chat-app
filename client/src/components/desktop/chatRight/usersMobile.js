import React, { useEffect, useState } from 'react'

function UsersMobile({ users, chat, socket, setShowUsers }) {
  const currUser = localStorage.getItem("userName")

  return (
    <div className={`my-2 p-2 w-full h-auto flex flex-col items-center ${!chat && "blur-sm pointer-events-none"}`}>
      <p className='text-xl'>List of active users:</p>
      <div>
        <div className='flex flex-wrap gap-x-5 gap-y-3 py-3'>
          {users.map((el,i)=>{
            return(
              <div key={`${el.username}-iconMob`} className={`flex bg-white px-3 py-1 rounded-full ${el.username==currUser && "outline outline-4 outline-lime-500"}`}>
                <div className='w-[30px] h-[30px] rounded-full mr-2'>
                  <img src={`./avatars/${el.avatar}`} />
                </div>
                <div className='text-lg font-semibold'>{el.username}</div>
              </div>
            )
          })}
        </div>
      </div>
      <button onClick={()=>setShowUsers(false)} className={`absolute top-3 left-2 w-[32.5px] h-[32.5px] rounded-full border-2 border-red-500 hover:bg-red-500 text-center text-red-500 hover:text-white font-semibold`}>&larr;</button>
    </div>
  )
}

export default UsersMobile