import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { IMessage } from 'src/interfaces/IMessage';
import { IUser } from 'src/interfaces/IUser';
import { getCurrentUserSelector } from 'src/store/slices';
import { Avatar } from '../Avatar';
import './Message.style.css';

export const Message : FC<{
  message: IMessage,
  user: IUser | undefined
}> = ({ message, user }) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isFromThisUser = currentUser === user;
  return (
    <div className={`message-wrapper ${isFromThisUser && 'this-user'}`}>
      <div className='message'>{message.text}</div>
      <Avatar src={user?.avatar} login={user?.login}/>
    </div>
  )
};