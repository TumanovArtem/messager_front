import React, { FC, useEffect, useMemo } from 'react';
import { ITrade } from 'src/interfaces/ITrade';
import { IUser } from 'src/interfaces/IUser';
import { 
  changeCurrentTrade,
  getBitcoinRateSelector,
  getCurrentUserSelector,
  getMessagesSelector,
  getUsersSelector
} from 'src/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import './TradeCard.style.css';
import { IMessage } from 'src/interfaces/IMessage';
import { readMessages } from 'src/store/slices';
import { Avatar } from '../Avatar';

export const TradeCard: FC<{
  trade: ITrade;
  currentTrade: ITrade;
}> = ({trade, currentTrade}) => {

  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  const counterUser = useSelector(getUsersSelector).find((user : IUser) => user.id === currentTrade?.buyerId);
  const newMessages = useSelector(getMessagesSelector).filter((message : IMessage) =>
    message.tradeId === trade.id && message.receiverId === currentUser.id && !message.isRead
  );

  const bitcoinRate = useSelector(getBitcoinRateSelector);

  const handleClick = () => {
    dispatch(changeCurrentTrade(trade));
  };
  
  const isCurrentTrade = useMemo(() => currentTrade.id === trade.id ? 'active': '', [currentTrade, trade]);

  useEffect(() => {
    isCurrentTrade && dispatch(readMessages({
      tradeId: currentTrade.id,
      receiverId: currentUser.id
    }));
  }, [isCurrentTrade, currentTrade.id, currentUser.id, dispatch]);

  return (
    <div className={`trade-card ${isCurrentTrade}`} onClick={handleClick} >
      <div className='trade-info'>
        <div className={`new-messages-indicator ${newMessages.length && 'active'}`}></div>
        <p>{counterUser?.login} is buying</p>
        <p>{trade.method}</p>
        <p>{trade.amount} USD ({(trade.amount / Number(bitcoinRate)).toFixed(8)} BTC)</p>
      </div>
      <div className='payment-status'>
        <Avatar src={counterUser?.avatar} login={counterUser?.login} />
        <p>{trade.paid ? <span className='success'>PAID</span> : 'NOT PAID'}</p>
      </div>
    </div>
  )
};