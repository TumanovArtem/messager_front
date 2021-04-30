import React, {FC} from 'react';
import './Nav.style.css';

export const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className='logo'>Logo</div>
      <ul>
        <li><a>Buy bitcoins</a></li>
        <li><a>Sell bitcoins</a></li>
        <li><a>Wallet</a></li>
        <li><a>Support</a></li>
        <li><a>Your account</a></li>
      </ul>
    </nav>
  );
}

export default Nav;