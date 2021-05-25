import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { ITrade } from 'src/interfaces/ITrade';
import { IUser } from 'src/interfaces/IUser';
import {
  changeCurrentTrade,
  getBitcoinRateSelector,
  getCurrentTradeSelector,
  getCurrentUserSelector,
  getMessagesSelector,
  getUsersSelector,
  readMessages
} from 'src/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { IMessage } from 'src/interfaces/IMessage';
import classNames from 'classnames';
import { NOT_PAID, PAID } from 'src/constants/constants';
import { Avatar } from '../Avatar';
import './TradeCard.style.css';

export const TradeCard: FC<{
  trade: ITrade;
}> = ({ trade }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector)!;
  const currentTrade = useSelector(getCurrentTradeSelector)!;
  const counterUser = useSelector(getUsersSelector).find(
    (user: IUser) => user.id === trade.buyerId
  )!;
  const newMessages = useSelector(getMessagesSelector).filter(
    (message: IMessage) =>
      message.tradeHash === trade.hash &&
      message.receiverId === currentUser.id &&
      !message.isRead
  );
  const bitcoinRate = useSelector(getBitcoinRateSelector);

  const handleClick = useCallback(() => {
    dispatch(changeCurrentTrade(trade.hash));
  }, [trade, dispatch]);

  const isCurrentTrade = currentTrade?.id === trade.id;

  useEffect(() => {
    dispatch(
      readMessages({
        tradeHash: currentTrade?.hash,
        receiverId: currentUser?.id
      })
    );
  }, [isCurrentTrade, currentTrade?.hash, currentUser.id, dispatch]);

  const bitcoins = useMemo(
    () => (trade.amount / Number(bitcoinRate)).toFixed(8),
    [bitcoinRate, trade.amount]
  );

  return (
    <button
      type='button'
      className={classNames('trade-card', { active: isCurrentTrade })}
      onClick={handleClick}
    >
      <div
        className={classNames('new-messages-indicator', {
          active: newMessages.length
        })}
      />
      <div className='trade-info'>
        <p className='login'>
          {counterUser.login} <b>is buying</b>
        </p>
        <div className='trade-method'>
          <p>{trade.method}</p>
          <p className='amount'>
            {trade.amount} USD {bitcoinRate && `(${bitcoins} BTC)`}
          </p>
        </div>
      </div>
      <div className='payment-status'>
        <Avatar src={counterUser.avatar} login={counterUser.login} />
        <p>{trade.paid ? <span className='success'>{PAID}</span> : NOT_PAID}</p>
      </div>
    </button>
  );
};
