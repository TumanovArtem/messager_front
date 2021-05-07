import React, {FC} from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { 
  DISPUTES_PATH,
  MY_TEAM_PATH, 
  OVERVIEW_PATH, 
  TRADES_PATH, 
  TRADE_HISTORY_PATH, 
  YOUR_OFFERS_PATH 
} from 'src/constants/routes';
import './Menu.style.css';

export const Menu: FC = () => {
  let match = useRouteMatch();

  return (
    <nav className='menu'>
      <ul>
        <li><Link to={`${match.url}${OVERVIEW_PATH}`}>Overview</Link></li>
        <li><Link to={`${match.url}${TRADES_PATH}`}>Trades</Link></li>
        <li><Link to={`${match.url}${DISPUTES_PATH}`}>Disputes</Link></li>
        <li><Link to={`${match.url}${YOUR_OFFERS_PATH}`}>Your offers</Link></li>
        <li><Link to={`${match.url}${MY_TEAM_PATH}`}>My team</Link></li>
        <li><Link to={`${match.url}${TRADE_HISTORY_PATH}`}>Trade history</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;