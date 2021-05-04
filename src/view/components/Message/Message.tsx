import React, {FC} from 'react';
import { IMessage } from 'src/interfaces/IMessage';
import './Message.style.css';

export const Message : FC<{
  message: IMessage,
  avatar: string | undefined,
  isFromThisUser: boolean
}> = ({ message, avatar, isFromThisUser }) => {
  
  return (
    <div className={`message-wrapper ${isFromThisUser && 'this-user'}`}>
      <div className='message'>{message.text}</div>
      <img className='avatar' src={avatar} alt=""/>
    </div>
  )
};

export default Message;