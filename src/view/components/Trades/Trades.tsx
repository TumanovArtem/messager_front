import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NO_OPEN_TRADES } from 'src/constants/constants';
import { ITrade } from 'src/interfaces/ITrade';
import {
  changeCurrentTrade,
  getCurrentTradeSelector,
  getTradesSelector
} from 'src/store/slices';
import { Messager } from 'src/view/components/Messager';
import { TradeList } from 'src/view/components/TradeList';
import { UserInfo } from 'src/view/components/UserInfo';
import './Trades.style.css';

export type ParamTypes = {
  tradeHash: string;
};

export const Trades: FC = () => {
  const dispatch = useDispatch();
  const trades = useSelector(getTradesSelector);
  const currentTrade = useSelector(getCurrentTradeSelector);
  const { tradeHash } = useParams<ParamTypes>();

  useEffect(() => {
    const trade = trades.find(({ id }: ITrade) => id === tradeHash.slice(1));
    dispatch(changeCurrentTrade(trade?.id || null));
  }, [dispatch, tradeHash, trades]);

  return !trades.length ? (
    <h1 className='no-open-trades'>{NO_OPEN_TRADES}</h1>
  ) : (
    <>
      <TradeList />
      {currentTrade && (
        <>
          <Messager />
          <UserInfo />
        </>
      )}
    </>
  );
};
