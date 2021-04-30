import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from 'src/interfaces/store';
import { Message } from '../Message';
import './Messager.style.css';

export const Messager : FC = () => {
  const currentUser = useSelector((state: IStoreState) => state.users.currentUser);
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const messages = useSelector((state : IStoreState) => 
    state.messages.data.filter(message => message.tradeId === currentTrade.id)
  );

  return (
    <div className="messager">
      <div className="messager-header">
        <h1>{currentTrade.method}</h1>
        <p>{currentUser.login}</p>
      </div>
      <div className="messages-space">
        <ul>
        {messages.map(message => <Message message={message} isFromThisUser={currentUser.id === message.fromId}/>)}
        </ul>
      </div>
    </div>
  )
};

export default Messager;