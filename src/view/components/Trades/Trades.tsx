import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState, IUsersStore } from 'src/interfaces/store';
import { TradeCard } from '../TradeCard';
import './Trades.style.css';

export const Trades : FC = () => {
  const currentUser = useSelector((state : IStoreState) => state.users.currentUser);
  const currentTrade = useSelector((state : IStoreState) => state.trades.currentTrade);
  const trades = useSelector((state: IStoreState) => 
    state.trades.data.filter(trade => 
      trade.buyerId === currentUser.id || trade.sellerId === currentUser.id
    )
  );
  
  return (
    <div className="trades">
      {trades.map(trade => <TradeCard key={trade.id} trade={trade} currentTrade={currentTrade} user={currentUser} />)}
    </div>
  )
};

export default Trades;