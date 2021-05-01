import React, { FC, useMemo } from 'react';
import { ITrade } from 'src/interfaces/ITrade';
import { IUser } from 'src/interfaces/IUser';
import { changeCurrentTrade } from 'src/store/tradesSlice';
import { useDispatch, useSelector } from 'react-redux';
import './TradeCard.style.css';
import { IStoreState } from 'src/interfaces/store';

export const TradeCard: FC<{
  trade: ITrade;
  currentTrade: ITrade;
  user: IUser;
}> = ({trade, currentTrade, user}) => {
  const dispatch = useDispatch();
  const currentTradeId = currentTrade.id;

  const handleClick = () => {
    dispatch(changeCurrentTrade(trade));
  };
  
  const isCurrentTrade = useMemo(()=> currentTradeId === trade.id ? 'active': '', [currentTradeId]);

  return (
    <div className={`trade-card ${isCurrentTrade}`} onClick={handleClick} >
      <div className='trade-info'>
        <p>{user.login} is buying</p>
        <p>{trade.method}</p>
        <p>{trade.money} USD</p>
      </div>
      <div className='payment-status'>
        <img className='avatar' src={user.avatar} alt=''/>
        <p>{trade.paid ? 'PAID' : 'NOT PAID'}</p>
      </div>
    </div>
  )
}

function dispatch(arg0: { payload: ITrade; type: string; }) {
  throw new Error('Function not implemented.');
}
