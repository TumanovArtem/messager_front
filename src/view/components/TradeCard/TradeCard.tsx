import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { ITrade } from 'src/interfaces/ITrade';
import { IUser } from 'src/interfaces/IUser';
import { 
  changeCurrentTrade,
  getBitcoinRateSelector,
  getCurrentTradeSelector,
  getCurrentUserSelector,
  getMessagesSelector,
  getUsersSelector
} from 'src/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { IMessage } from 'src/interfaces/IMessage';
import { readMessages } from 'src/store/slices';
import { Avatar } from '../Avatar';
import classNames from 'classnames';
import { NOT_PAID, PAID } from 'src/constants/constants';
import './TradeCard.style.css';

export const TradeCard: FC<{
  trade: ITrade;
}> = ({trade}) => {

  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserSelector);
  const currentTrade = useSelector(getCurrentTradeSelector);
  const counterUser = useSelector(getUsersSelector).find((user : IUser) => user.id === trade.buyerId);
  const newMessages = useSelector(getMessagesSelector).filter((message : IMessage) =>
    message.tradeId === trade.id && message.receiverId === currentUser.id && !message.isRead);
  const bitcoinRate = useSelector(getBitcoinRateSelector);

  const handleClick = useCallback(() => {
    dispatch(changeCurrentTrade(trade));
  }, [trade, dispatch]);

  const isCurrentTrade = currentTrade.id === trade.id;

  useEffect(() => {
    isCurrentTrade && dispatch(readMessages({
      tradeId: currentTrade.id,
      receiverId: currentUser.id
    }));
  }, [isCurrentTrade, currentTrade.id, currentUser.id, dispatch]);

  var bitcoins = useMemo(() => 
    Number((trade.amount / Number(bitcoinRate)).toFixed(8)),
  [bitcoinRate, trade.amount]);

  return (
    <div className={classNames('trade-card', {'active': isCurrentTrade})} onClick={handleClick} >
      <div className='trade-info'>
        <div className={classNames('new-messages-indicator', {'active': newMessages.length})}></div>
        <p>{counterUser?.login} is buying</p>
        <p>{trade.method}</p>
        <p>{trade.amount} USD {Number.isFinite(bitcoins) && `(${bitcoins} BTC)`}</p>
      </div>
      <div className='payment-status'>
        <Avatar src={counterUser?.avatar} login={counterUser?.login} />
        <p>{trade.paid ? <span className='success'>{PAID}</span> : NOT_PAID}</p>
      </div>
    </div>
  )
};