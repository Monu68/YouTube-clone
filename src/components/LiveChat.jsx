import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

  const [liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch()
  const ChatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() =>{
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message : makeRandomMessage(20)+ " 🚀"
        })
      )
    },1500)

    return () => clearInterval(i);
},[])
  return (
    <>
    <div className='w-full h-[415px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     <div>
        {
          ChatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message}/>   
          ))
        }
     </div>
      </div>
       <form className='w-full ml-2 p-2 border border-black' onSubmit={(e) =>{
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mak",
              message: liveMessage

            })
          )
          setLiveMessage("");
       }}>
       <input className='w-80 px-2' type='text' value={liveMessage} onChange={(e) => {
        setLiveMessage(e.target.value)
       }}/>
       <button className='px-2 mx-4 bg-blue-300 rounded-lg'>Send</button>
      </form>
      </>
  )
}

export default LiveChat