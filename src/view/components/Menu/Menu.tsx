import React, {FC} from 'react';
import './Menu.style.css';

export const Menu: FC = () => {
  return (
    <nav className='menu'>
      <ul>
        <li><a>Overview</a></li>
        <li><a>Trades</a></li>
        <li><a>Disputes</a></li>
        <li><a>Your offers</a></li>
        <li><a>My team</a></li>
        <li><a>Trade history</a></li>
      </ul>
    </nav>
  );
}

export default Menu;