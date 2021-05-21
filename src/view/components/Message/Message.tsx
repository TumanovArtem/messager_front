import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IMessage } from 'src/interfaces/IMessage';
import { IUser } from 'src/interfaces/IUser';
import { getCurrentUserSelector } from 'src/store/slices';
import { Avatar } from '../Avatar';
import './Message.style.css';

export const Message: FC<{
  message: IMessage;
  user: IUser;
}> = ({ message, user }) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isFromThisUser = currentUser === user;

  const time = useMemo(
    () =>
      new Date(Date.parse(message.date))
        .toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })
        .toLowerCase(),
    [message]
  );

  return (
    <div className={`message-wrapper ${isFromThisUser && 'this-user'}`}>
      <div className='message'>{message.text}</div>
      <Avatar src={user.avatar} login={user.login} />
      <div className='time'>{time}</div>
    </div>
  );
};
