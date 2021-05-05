import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from 'src/interfaces/store';
import { TradeCard } from '../TradeCard';
import './Trades.style.css';

export const Trades : FC = () => {
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const trades = useSelector((state: IStoreState) => state.trades.data);
  
  return (
    <div className="trades">
      {trades.map(trade => <TradeCard key={trade.id} trade={trade} currentTrade={currentTrade} />)}
    </div>
  )
};