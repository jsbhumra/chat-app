import React, { useEffect } from 'react'
import DesktopHome from '../components/desktop/page'
import {isMobile} from 'react-device-detect';
import MobileHome from '../components/mobile/page';

function Chat({ socket }) {

  useEffect(()=>{
    localStorage.setItem('userName', '');
    localStorage.setItem('avatar', '');
  },[])

  if(isMobile) return (
    <MobileHome socket={socket} />
  )
  else return (
    <DesktopHome socket={socket} />
  )
}

export default Chat