import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { HOME_PATH, SELL_BITCOINS_PATH } from 'src/constants/routes';
import './Nav.style.css';

export const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className='logo'>PAXFUL</div>
      <ul>
        <li><Link to={HOME_PATH}>Buy bitcoins</Link></li>
        <li><Link to={SELL_BITCOINS_PATH}>Sell bitcoins</Link></li>
        <li><Link to={HOME_PATH}>Wallet</Link></li>
        <li><Link to={HOME_PATH}>Support</Link></li>
        <li><Link to={HOME_PATH}>Your account</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;