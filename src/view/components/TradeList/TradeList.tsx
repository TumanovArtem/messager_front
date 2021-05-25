import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getTradesSelector } from 'src/store/slices';
import { TradeCard } from '../TradeCard';
import './TradeList.style.css';

export const TradeList: FC = () => {
  const match = useRouteMatch();
  const trades = useSelector(getTradesSelector);
  return (
    <div className='trades'>
      {trades.map((trade) => (
        <Link to={`${match.path.split(':')[0]}:${trade.id}`} key={trade.id}>
          <TradeCard trade={trade} />
        </Link>
      ))}
    </div>
  );
};
