import React, { useState, useEffect, useRef } from 'react';
import ChatContent from '../ChatContent/ChatContent';
import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import { GET_USER_BY_USERNAME } from "../../utils/queries"
import './ChatNav.css';

export default function ChatNav({ setOpen, chatActive, socket, onOpen, groupchat }) {

  
  const lastMessageRef = useRef(null);
  const user = useRef("")

  const [userFocus, setUserFocus] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');

  const [ addFriend, {error} ] = useMutation(ADD_FRIEND)

  const [checkUsername,{ loading, data }] = useLazyQuery(GET_USER_BY_USERNAME, {variables: { username: user.current?.value }})
  
   useEffect(() => {
      if (user.current?.value && !userFocus) {
          checkUsername()
      }
  }, [userFocus]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async () => {
    const { data } = await addFriend({
      variables: {
        username: user.current?.value
      }
    });
    console.log(data);
  }
  return (
    <>
      <div className="ChatNav">
      <div className="">
        <div className="header">
          <div className="search-bar">
            <input onBlur={() => setUserFocus(false)} ref={user} type="text" placeholder="Search username" />
          </div>
          <div className="button-group">
            <div className="flex gap-4 justify-center">
              <button  onClick={handleSubmit} className=" mt-0 px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Add Friend
              </button>
              <button className=" mt-0 px-4 py- 2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Create chat
              </button>
              <button onClick={() => onOpen()} className=" mt-0 px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded">
                Create group chat
              </button>
            </div>
          </div>
        </div>
        {chatActive ?
          <ChatContent socket={socket} groupchat={groupchat} />
          :
          <div className="flex-grow flex flex-col">
            <div className="flex justify-center mr-2 mt-3 rounded-sm items-end h-10">
              <input
                type="text"
                placeholder="Search group name"
                className='textField rounded-sm w-1/4 mb-2 mt-2'
              />
            </div>
            <div className="flex-grow flex-col flex justify-center items-center">
              <p className='text-sm' style={{fontSize : '16px'}}>Create Chat by using Create Chat Button</p>
              <p className='text-sm' style={{fontSize : '16px'}}>Add Friend by using Add user as friend</p>
            </div>
          </div>
        }       
      </div>
    </div>
    </>
  )
}