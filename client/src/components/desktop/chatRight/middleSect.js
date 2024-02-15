import React, { useEffect, useState } from 'react'
import styles from '../../../App.css'
import SentMessTop from './messages/sentMessTop'
import RecMessTop from './messages/recMessTop'
import SentMess from './messages/sentMess';
import RecMess from './messages/recMess';

function MiddleSect({ socket }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('newMessResp', (data) => setMessages([...messages,data]));
      }, [socket, messages]);

  return (
    <div className='flex flex-col justify-end grow h-auto w-full overflow-y-scroll overflow-x-hidden py-5'>
        {messages.map((el,i,arr)=>{
            if(el.socketID==socket.id){
                if(i!=0 && arr[i-1].socketID==el.socketID){
                    return(<SentMess details={el} />)
                }
                return(<SentMessTop details={el} />)
            } else {
                if(i!=0 && arr[i-1].socketID==el.socketID){
                    return(<RecMess details={el} />)
                }
                return(<RecMessTop details={el} />)
            }
        })}
    </div>
  )
}

export default MiddleSect