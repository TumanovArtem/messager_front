import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITrade } from "src/interfaces/ITrade";
import { IUser } from "src/interfaces/IUser";
import { addMessage, getCurrentUserSelector, getMessagesSelector, getUsersSelector } from "src/store/slices";
import { Message } from "../Message";
import './MessagesSpace.style.css';

export const MessagesSpace : FC<{
  currentTrade: ITrade | null
}> = ({ currentTrade }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUserSelector);
  const messages = useSelector(getMessagesSelector).filter(message => message.tradeId === currentTrade?.id);
  const counterUser = useSelector(getUsersSelector).find((user : IUser) => user.id === currentTrade?.buyerId);
  
  const [value, setValue] = useState('');
  
  const handleChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value && currentTrade && dispatch(addMessage({
      id: messages.length++,
      tradeId: currentTrade?.id,
      senderId: currentUser.id,
      receiverId: counterUser?.id,
      text: value,
      date: new Date().toString(),
      isRead: false
    }));
    setValue('');
  }, [counterUser?.id, currentTrade, currentUser.id, dispatch, messages.length, value]);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  });

  return (
    <div className="messages-space-wrapper">
      <div className="messages-space">
        <ul>
        {messages.map(message => 
          <Message 
            key={message.id} 
            message={message}
            user={currentUser.id === message.senderId ? currentUser: counterUser}
          />)
        }
        </ul>
        <div ref={messagesEndRef}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} placeholder='Type your message...' />
        <input type="submit" value="SEND" />
      </form>
    </div>
  )
};
