import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BUY_BITCOINS_PATH,
  SELL_BITCOINS_PATH,
  SUPPORT_PATH,
  WALLET_PATH,
  YOUR_ACCOUNT_PATH
} from 'src/constants/routes';
import './Nav.style.css';

export const Nav: FC = () => {
  return (
    <nav className='nav'>
      <div className='logo'>PAXFUL</div>
      <ul>
        <li>
          <NavLink activeClassName='active-route' to={BUY_BITCOINS_PATH}>
            Buy bitcoins
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-route' to={SELL_BITCOINS_PATH}>
            Sell bitcoins
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-route' to={WALLET_PATH}>
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-route' to={SUPPORT_PATH}>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-route' to={YOUR_ACCOUNT_PATH}>
            Your account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
