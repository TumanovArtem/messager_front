import React, {FC, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from 'src/interfaces/store';
import { addMessage } from 'src/store/massagesSlice';
import { Message } from '../Message';
import nextId from "react-id-generator";
import './Messager.style.css';
import { IUser } from 'src/interfaces/IUser';
import { DeleteRounded, Person } from '@material-ui/icons';
import { deleteTrade, switchRoles } from 'src/store/tradesSlice';
import { switchUser } from 'src/store/usersSlice';

export const Messager : FC = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: IStoreState) => state.users.currentUser);
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const trades = useSelector((state : IStoreState) => state.trades.data);
  const messages = useSelector((state : IStoreState) => 
    state.messages.data.filter(message => message.tradeId === currentTrade?.id)
  );

  const counterUser = useSelector((state : IStoreState) => 
    state.users.data.find((user : IUser) => 
      user.id === currentTrade?.buyerId
    )
  );

  const [value, setValue] = useState('');

  const handleDeleteTrade = () => {
    dispatch(deleteTrade(currentTrade));
  };

  const handleSwitchUser = () => {
    dispatch(switchRoles());
    dispatch(switchUser());
  };

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

  return (
    <div className="messager">
      {!trades.length ? 'No trades available': (
        <>
          <div className="messager-header">
            <button className='delete-trade'>
              <DeleteRounded onClick={handleDeleteTrade}/>
            </button>
            <h1>{currentTrade.method}</h1>
            <p>{counterUser?.login}</p>
            <button className='switch-user'>
              <Person onClick={handleSwitchUser}/>
            </button>
          </div>
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
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={value} />
            <input type="submit" value="SEND" />
          </form>
        </>
      )}
    </div>
  )
};
