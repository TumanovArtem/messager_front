import React, {FC} from 'react';
import { IMessage } from 'src/interfaces/IMessage';
import './Message.style.css';

export const Message : FC<{
  message: IMessage,
  isFromThisUser: boolean
}> = ({ message, isFromThisUser }) => {

  return (
    <div className={`message ${isFromThisUser && 'this-user'}`}>
      {message.text}
    </div>
  )
};

export default Message;