import React, { FC, useEffect, useMemo } from 'react';
import { ITrade } from 'src/interfaces/ITrade';
import { IUser } from 'src/interfaces/IUser';
import { changeCurrentTrade } from 'src/store/tradesSlice';
import { useDispatch, useSelector } from 'react-redux';
import './TradeCard.style.css';
import { IStoreState } from 'src/interfaces/store';
import { IMessage } from 'src/interfaces/IMessage';
import { readMessages } from 'src/store/massagesSlice';

export const TradeCard: FC<{
  trade: ITrade;
  currentTrade: ITrade;
}> = ({trade, currentTrade}) => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state : IStoreState) => state.users.currentUser);

  const counterUser = useSelector((state: IStoreState) =>
    state.users.data.find((user : IUser) => 
      user.id === currentTrade.buyerId
    )
  );

  const newMessages = useSelector((state : IStoreState) => 
    state.messages.data.filter((message : IMessage) =>
      message.tradeId === trade.id && message.receiverId === currentUser.id && !message.isRead
    )
  );

  const bitcoinRate = useSelector((state: IStoreState) => state.bitcoinRate.USD);

  const handleClick = () => {
    dispatch(changeCurrentTrade(trade));
  };
  
  const isCurrentTrade = useMemo(() => currentTrade.id === trade.id ? 'active': '', [currentTrade, trade]);

  useEffect(() => {
    isCurrentTrade && dispatch(readMessages({
      tradeId: currentTrade.id,
      receiverId: currentUser.id
    }));
  }, [isCurrentTrade]);

  return (
    <div className={`trade-card ${isCurrentTrade}`} onClick={handleClick} >
      <div className='trade-info'>
        <div className={`new-messages-indicator ${newMessages.length && 'active'}`}></div>
        <p>{counterUser?.login} is buying</p>
        <p>{trade.method}</p>
        <p>{trade.money} USD ({(trade.money / Number(bitcoinRate)).toFixed(8)} BTC)</p>
      </div>
      <div className='payment-status'>
        <img className='avatar' src={`/${counterUser?.avatar}`} alt=''/>
        <p>{trade.paid ? 'PAID' : 'NOT PAID'}</p>
      </div>
    </div>
  )
};
