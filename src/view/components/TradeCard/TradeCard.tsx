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
}> = ({trade, currentTrade}) => {
  const dispatch = useDispatch();
  const counterUser = useSelector((state: IStoreState) =>
    state.users.data.find((user : IUser) => user.id === currentTrade.buyerId));

  const currentTradeId = currentTrade.id;
  const handleClick = () => {
    dispatch(changeCurrentTrade(trade));
  };
  
  const isCurrentTrade = currentTradeId === trade.id ? 'active': '';

  return (
    <div className={`trade-card ${isCurrentTrade}`} onClick={handleClick} >
      <div className='trade-info'>
        <p>{counterUser?.login} is buying</p>
        <p>{trade.method}</p>
        <p>{trade.money} USD</p>
      </div>
      <div className='payment-status'>
        <img className='avatar' src={counterUser?.avatar} alt=''/>
        <p>{trade.paid ? 'PAID' : 'NOT PAID'}</p>
      </div>
    </div>
  )
}

function dispatch(arg0: { payload: ITrade; type: string; }) {
  throw new Error('Function not implemented.');
}
