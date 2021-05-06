import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getCurrentTradeSelector, getTradesSelector } from 'src/store/slices';
import { TradeCard } from '../TradeCard';
import './Trades.style.css';

export const Trades : FC = () => {
  const match = useRouteMatch();
  const currentTrade = useSelector(getCurrentTradeSelector);
  const trades = useSelector(getTradesSelector);
  
  return (
    <div className="trades">
      {trades.map(trade => (
        <Link to={`${match.url}/${trade.id}`} key={trade.id}>
          <TradeCard  trade={trade} currentTrade={currentTrade} />
        </Link>
      ))}
    </div>
  )
};