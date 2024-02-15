import React, { useEffect, useState } from 'react'

function BottomSect({ users, chat, socket }) {
  const currUser = localStorage.getItem("userName")

  return (
    <div className={`my-2 p-2 w-full h-1/2 grow flex flex-col items-center ${!chat && "blur-sm"}`}>
      <p className='text-xl'>List of active users:</p>
      <div>
        <div className='flex flex-wrap gap-x-5 gap-y-3 py-3'>
          {users.map((el,i)=>{
            return(
              <div className={`flex bg-white px-3 py-1 rounded-full ${el.username==currUser && "outline outline-4 outline-lime-500"}`}>
                <div className='w-[30px] h-[30px] rounded-full mr-2'>
                  <img src={`./avatars/${el.avatar}`} />
                </div>
                <div className='text-lg font-semibold'>{el.username}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BottomSect