import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import './Nav.style.css';

export const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className='logo'>Logo</div>
      <ul>
        <li><Link to='/'>Buy bitcoins</Link></li>
        <li><Link to='/sell-bitcoins'>Sell bitcoins</Link></li>
        <li><Link to='/'>Wallet</Link></li>
        <li><Link to='/'>Support</Link></li>
        <li><Link to='/'>Your account</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;