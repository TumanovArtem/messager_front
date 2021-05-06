import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITrade } from "src/interfaces/ITrade";
import { IUser } from "src/interfaces/IUser";
import { IStoreState } from "src/interfaces/store";
import { addMessage } from "src/store/slices/massagesSlice";
import { Message } from "../Message";
import './MessagesSpace.style.css';

export const MessagesSpace : FC<{
  currentTrade: ITrade
}> = ({ currentTrade }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: IStoreState) => state.users.currentUser);
  const messages = useSelector((state : IStoreState) => 
    state.messages.data.filter(message => message.tradeId === currentTrade?.id)
  );
  const counterUser = useSelector((state : IStoreState) => 
    state.users.data.find((user : IUser) => 
      user.id === currentTrade?.buyerId
    )
  );
  
  const [value, setValue] = useState('');
  
  const handleChange = (e : any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e : any) => {
    dispatch(addMessage({
      id: messages.length++,
      tradeId: currentTrade.id,
      senderId: currentUser.id,
      receiverId: 1,
      text: value,
      date: new Date().toString(),
      isRead: false
    }));
    setValue('');
    e.preventDefault();
  };

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
            avatar={currentUser.id === message.senderId ? currentUser.avatar: counterUser?.avatar}
            isFromThisUser={currentUser.id === message.senderId}
          />)
        }
        </ul>
        <div ref={messagesEndRef}></div>
      </div>
      <form onSubmit={handleSubmit} action={currentTrade.id.toString()}>
        <input type="text" onChange={handleChange} value={value} placeholder='Type your message...' />
        <input type="submit" value="SEND" />
      </form>
    </div>
  )
};
