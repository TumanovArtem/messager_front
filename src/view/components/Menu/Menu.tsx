import React, {FC} from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './Menu.style.css';

export const Menu: FC = () => {
  let match = useRouteMatch();

  return (
    <nav className='menu'>
      <ul>
        <li><Link to={`${match.url}/overview`}>Overview</Link></li>
        <li><Link to={`${match.url}/trades`}>Trades</Link></li>
        <li><Link to={`${match.url}/disputes`}>Disputes</Link></li>
        <li><Link to={`${match.url}/your-offers`}>Your offers</Link></li>
        <li><Link to={`${match.url}/my-team`}>My team</Link></li>
        <li><Link to={`${match.url}/trade-history`}>Trade history</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;