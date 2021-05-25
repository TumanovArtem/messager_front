import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'src/interfaces/IUser';
import {
  executeTransaction,
  getBitcoinRateSelector,
  getCurrentTradeSelector,
  getTradesSelector,
  getUsersSelector
} from 'src/store/slices';
import { Avatar } from 'src/view/components/Avatar';
import { Payment } from 'src/constants/constants';
import './UserInfo.style.css';

export const UserInfo: FC = () => {
  const dispatch = useDispatch();

  const trades = useSelector(getTradesSelector);
  const currentTrade = useSelector(getCurrentTradeSelector);
  const counterUser = useSelector(getUsersSelector).find(
    (user: IUser) => user.id === currentTrade?.buyerId
  )!;
  const bitcoinRate = useSelector(getBitcoinRateSelector);

  const handleClick = useCallback(() => {
    dispatch(executeTransaction());
  }, []);

  return (
    <div className='user-info'>
      <p className='title'>
        You are trading with <b>{counterUser.login}</b>
      </p>
      <p className='time'>Started 23 minutes ago</p>
      <button type='button' onClick={handleClick}>
        Release bitcoins
      </button>
      <div className='table'>
        <div>
          <Avatar src={counterUser.avatar} login={counterUser.login} />
          <p>
            <span className='success'>+{counterUser.ratingPros}</span>
            <span> / </span>
            <span className='fail'>-{counterUser.ratingCons}</span>
          </p>
        </div>
        <div>
          <p className='table-title'># OF TRADES:</p>
          <p>{trades.length}</p>
        </div>
        <div>
          <p className='table-title'>Trade status:</p>
          <p>
            {currentTrade?.paid ? (
              <span className='success'>{Payment.Paid}</span>
            ) : (
              Payment.NotPaid
            )}
          </p>
        </div>
        <div>
          <p className='table-title'>TRADE HASH:</p>
          <p>{currentTrade?.id}</p>
        </div>
        <div>
          <p className='table-title'>AMOUNT USD:</p>
          <p>{currentTrade?.amount.toFixed(2)}</p>
        </div>
        <div>
          <p className='table-title'>AMOUNT BTC:</p>
          <p>
            {bitcoinRate &&
              ((currentTrade?.amount || 0) / Number(bitcoinRate)).toFixed(8)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
