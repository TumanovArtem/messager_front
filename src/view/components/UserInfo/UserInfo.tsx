import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'src/interfaces/IUser';
import { IStoreState } from 'src/interfaces/store';
import { executeTransaction } from 'src/store/tradesSlice';
import './UserInfo.style.css';

export const UserInfo : FC = () => {
  const dispatch = useDispatch();

  const trades = useSelector((state: IStoreState) => state.trades.data);
  const currentTrade = useSelector((state: IStoreState) => state.trades.currentTrade);
  const counterUser = useSelector((state : IStoreState) => 
    state.users.data.find((user : IUser) => 
      user.id === currentTrade?.buyerId
    )
  );
  const bitcoinRate = useSelector((state : IStoreState) => state.bitcoinRate.USD);

  const handleClick = () => {
    dispatch(executeTransaction());
  };

  return (
    <div className="user-info">
      {!trades.length ? 'No trades available' : (
        <>
          <h2>You are trading with {counterUser?.login}</h2>
          <p>Started 23 minutes ago</p>
          <button onClick={handleClick}>Release bitcoins</button>
          <div className="table">
            <div>
              <img src={`/${counterUser?.avatar}`} alt="" className="avatar"/>
              <p>
                <span>+{counterUser?.ratingPros}/</span>
                <span>-{counterUser?.ratingCons}</span>
              </p>
            </div>
            <div>
              <p># OF TRADES</p>
              <p>{trades.length}</p>
            </div>
            <div>
              <p>TRADE HASH:</p>
              <p>{currentTrade.hash}</p>
            </div>
            <div><p>Trade status: {currentTrade.paid ? 'PAID': 'NOT PAID'}</p></div>
            <div>
              <p>AMOUNT USD</p>
              <p>{currentTrade.money}</p>
            </div>
            <div>
              <p>AMOUNT BTC</p>
              <p>{(currentTrade.money / Number(bitcoinRate)).toFixed(8) }</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default UserInfo;