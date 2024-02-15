import React, { useState } from 'react'

function BottomSect({ socket }) {

  const [message,setMessage]=useState('')
  const [messNum,setMessNum]=useState(0)

  const isTyping = () => {
    // socket.emit('isTyping', `${localStorage.getItem('userName')} is typing . . .`)
  }

  const handleMessSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('newMess', {
        text: message,
        username: localStorage.getItem('userName'),
        avatar: localStorage.getItem('avatar'),
        textColor: localStorage.getItem('textColor'),
        id: `${socket.id}${messNum}`,
        socketID: socket.id,
      })
    }
    setMessNum((prev)=>prev+1)
    setMessage('')
  }

  return (
    <form onSubmit={handleMessSubmit} className='min-h-[45px] h-[45px] w-full shadow-[0_-15px_7.5px_-2px_#ccddff] shadow-[#ccddff] border-2 border-[#b2b2b2] rounded-full flex pl-5 z-[102]'>
        <div className='grow h-full'>
          <input type='text' placeholder='Enter your message here...' name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={isTyping} className='h-full w-full focus:outline-none bg-transparent' />
        </div>
        <div className='h-[2/3] min-w-[1px] bg-[#bebebe]'></div>
        <div className='relative h-full min-w-[80px] text-center mx-4'><button type='submit' className='-mt-[1px] text-[#4e4e4e] font-bold text-lg absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Send</button></div>
    </form>
  )
}

export default BottomSect