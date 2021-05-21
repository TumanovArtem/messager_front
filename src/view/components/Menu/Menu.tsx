import React, { FC } from 'react';
import { useLocation, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
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
  const match = useRouteMatch();
  const location = useLocation();
  const isActive = () => location.pathname.includes(TRADES_PATH);

  return (
    <nav className='menu'>
      <ul>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${OVERVIEW_PATH}`}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${TRADES_PATH}`}
            isActive={isActive}
          >
            Trades
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${DISPUTES_PATH}`}
          >
            Disputes
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${YOUR_OFFERS_PATH}`}
          >
            Your offers
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${MY_TEAM_PATH}`}
          >
            My team
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active-route'
            to={`${match.url}${TRADE_HISTORY_PATH}`}
          >
            Trade history
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
