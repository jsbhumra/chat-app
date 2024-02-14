import React, { useEffect } from 'react'
import DesktopHome from '../components/desktop/page'

function Chat({ socket }) {

  useEffect(()=>{
    localStorage.setItem('userName', '');
    localStorage.setItem('avatar', '');
  },[])

  return (
    <DesktopHome socket={socket} />
  )
}

export default Chat