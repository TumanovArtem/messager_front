import React, {FC} from 'react';
import { Menu } from 'src/Menu';
import { Messager } from 'src/Messager';
import { Nav } from 'src/Nav';
import { UserInfo } from 'src/UserInfo';
import { UsersList } from 'src/UsersList';
import './SellBitcoinsPage.style.css';

export const SellBitcoinsPage : FC = () => {
  return (
    <div className="bitcoins-page">
      <Nav />
      <Menu />
      <div className="content">
        <UsersList />
        <Messager />
        <UserInfo />
      </div>
    </div>
  )
};

export default SellBitcoinsPage;