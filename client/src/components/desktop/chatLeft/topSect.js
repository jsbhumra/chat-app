import React, { useState } from 'react'
import Constants from '../../../Constants'

const avatarList = Constants.avatarList;

function TopSect({ socket, chat, setChat, users }) {
    const [userName,setUserName] = useState('')
    const [userErr,setUserErr] = useState("false")
    const [avatar,setAvatar] = useState('actress.svg')

    const submitDetails = (e) => {
        e.preventDefault();
        if(userName==''){
            setUserErr("empty")
            return;
        }
        if(users.filter(us => us.username === userName).length > 0){
            setUserErr("error")
            return;
        }
        if(localStorage.getItem('userName')!=''){
            setUserErr("alreadyIn")
            return;
        }
        setUserErr("false")
        localStorage.setItem('userName', userName);
        localStorage.setItem('avatar', avatar);
        const textColor = avatarList.filter((el)=>el["url"]==avatar)[0]["bg"];
        localStorage.setItem('textColor', textColor);
        socket.emit('addUser', { username: userName, avatar: avatar, socketID: socket.id });
        setChat(true);
    }

  return (
    <div className={`my-2 p-2 w-full h-auto flex flex-col items-center ${chat && "blur-sm pointer-events-none"}`}>
        <div className='flex'>
            <p className='text-md font-semibold underline'>Welcome to <span className='text-xl font-bold'>ChatApp!</span></p>
        </div>
        <form onSubmit={submitDetails} className='flex flex-col gap-3 my-2'>
            <div className='flex'>
                <label>To get started:</label>
                <input type='text' minLength="5" maxLength="12" placeholder='username' name="username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className='ml-2 px-1 bg-transparent border-b border-[#bebebe] focus:outline-none focus:border-[#b2b2b2] focus:border-b-2' />
            </div>
            <div className='grid grid-cols-5 gap-4 py-3'>
                {avatarList.map((el,i)=>{
                    return(
                    <div key={`avatar${i}`} onClick={()=>setAvatar(el["url"])} className={`cursor-pointer rounded-full w-[50px] h-[50px] ${avatar==el["url"] && "outline outline-4 outline-blue-500 outline-offset-2"} `}>
                        <img src={`./avatars/${el["url"]}`} />
                    </div>)
                })}
                
            </div>
            <button type='submit' className='border-2 border-[#000] px-3 py-2 w-1/2 ml-[25%]'>Start chatting!</button>
            {userErr=="error" && <p className='text-red-400 text-sm text-center'>User with the same username already exists!</p>}
            {userErr=="empty" && <p className='text-red-400 text-sm text-center'>Username field cannot be empty!</p>}
            {userErr=="alreadyIn" && <p className='text-red-400 text-sm text-center'>You are already in the chat!</p>}
        </form>
    </div>
  )
}

export default TopSect