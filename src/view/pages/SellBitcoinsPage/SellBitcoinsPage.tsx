import React, {FC} from 'react';
import { Menu } from 'src/view/components/Menu';
import { Messager } from 'src/view/components/Messager';
import { UserInfo } from 'src/view/components/UserInfo';
import { Trades } from 'src/view/components/Trades';
import './SellBitcoinsPage.style.css';
import { useSelector } from 'react-redux';
import { IStoreState } from 'src/interfaces/store';

export const SellBitcoinsPage : FC = () => {
  return (
    <div className="bitcoins-page">
      <Menu />
      <div className="content">
        <Trades />
        <Messager />
        <UserInfo />
      </div>
    </div>
  )
};

export default SellBitcoinsPage;