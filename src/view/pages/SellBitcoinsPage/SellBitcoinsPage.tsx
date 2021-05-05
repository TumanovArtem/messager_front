import React, {FC} from 'react';
import { Menu } from 'src/view/components/Menu';
import { Messager } from 'src/view/components/Messager';
import { UserInfo } from 'src/view/components/UserInfo';
import { Trades } from 'src/view/components/Trades';
import './SellBitcoinsPage.style.css';
import { Route, useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom';

export const SellBitcoinsPage : FC = () => {
  const match = useRouteMatch();

  return (
    <div className="bitcoins-page">
      <Menu />
      <div className="content">
        <Switch>
          <Route path={`${match.url}/trades`}>
            <Trades />
            <Messager />
            <UserInfo />
          </Route>
        </Switch>
      </div>
    </div>
  )
};

export default SellBitcoinsPage;