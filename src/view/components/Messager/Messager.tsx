import React, {FC, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from 'src/interfaces/store';
import { addMessage } from 'src/store/massagesSlice';
import { Message } from '../Message';
import nextId from "react-id-generator";
import './Messager.style.css';
import { IUser } from 'src/interfaces/IUser';

export const Messager : FC = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: IStoreState) => state.users.currentUser);
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const messages = useSelector((state : IStoreState) => 
    state.messages.data.filter(message => message.tradeId === currentTrade.id)
  );

  const counterUser = useSelector((state : IStoreState) => 
    state.users.data.find((user : IUser) => 
      user.id === currentTrade.buyerId
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
      fromId: currentUser.id,
      toId: 1,
      text: value,
      date: new Date
    }));
    setValue('');
    e.preventDefault();
    console.log(value);
    console.log(nextId());
  };

  return (
    <div className="messager">
      <div className="messager-header">
        <h1>{currentTrade.method}</h1>
        <p>{counterUser?.login}</p>
      </div>
      <div className="messages-space">
        <ul>
        {messages.map(message => 
          <Message 
            key={message.id} 
            message={message}
            avatar={currentUser.id === message.fromId ? currentUser.avatar: counterUser?.avatar}
            isFromThisUser={currentUser.id === message.fromId}
          />)
        }
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <input type="submit" value="SEND" />
      </form>
    </div>
  )
};

export default Messager;