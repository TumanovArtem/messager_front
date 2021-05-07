import { Avatar } from 'src/view/components/Avatar';
import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'src/interfaces/IUser';
import { 
  executeTransaction,
  getBitcoinRateSelector, 
  getCurrentTradeSelector, 
  getTradesSelector, 
  getUsersSelector 
} from 'src/store/slices';
import './UserInfo.style.css';
import { NOT_PAID, PAID } from 'src/constants/constants';

export const UserInfo : FC = () => {
  const dispatch = useDispatch();

  const trades = useSelector(getTradesSelector);
  const currentTrade = useSelector(getCurrentTradeSelector);
  const counterUser = useSelector(getUsersSelector).find((user : IUser) => user.id === currentTrade?.buyerId);
  const bitcoinRate = useSelector(getBitcoinRateSelector);

  const handleClick = () => {
    dispatch(executeTransaction());
  };

  return (
    <div className="user-info">
      <p className="title">You are trading with <b>{counterUser?.login}</b></p>
      <p>Started 23 minutes ago</p>
      <button onClick={handleClick}>Release bitcoins</button>
      <div className="table">
        <div>
          <Avatar src={counterUser?.avatar} login={counterUser?.login}/>
          <p>
            <span className="success">+{counterUser?.ratingPros}</span>
            <span> / </span>
            <span className="fail">-{counterUser?.ratingCons}</span>
          </p>
        </div>
        <div>
          <p># OF TRADES</p>
          <p>{trades.length}</p>
        </div>
        <div>
          <p>Trade status:</p>
          <p>{currentTrade.paid ? <span className='success'>{PAID}</span>: NOT_PAID}</p>
        </div>
        <div>
          <p>TRADE HASH:</p>
          <p>{currentTrade.hash}</p>
        </div>
        <div>
          <p>AMOUNT USD</p>
          <p>{currentTrade.amount}</p>
        </div>
        <div>
          <p>AMOUNT BTC</p>
          <p>{(currentTrade.amount / Number(bitcoinRate)).toFixed(8) }</p>
        </div>
      </div>
    </div>
  )
};

export default UserInfo;