import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { IStoreState } from 'src/interfaces/store';
import { TradeCard } from '../TradeCard';
import './Trades.style.css';

export const Trades : FC = () => {
  const match = useRouteMatch();
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const trades = useSelector((state: IStoreState) => state.trades.data);
  
  return (
    <div className="trades">
      {trades.map(trade => (
        <Link to={`${match.url}/${trade.id}`}>
          <TradeCard key={trade.id} trade={trade} currentTrade={currentTrade} />
        </Link>
      ))}
    </div>
  )
};