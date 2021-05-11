import React, { FC } from 'react';
import { Menu } from 'src/view/components/Menu';
import { Route, useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom';
import './SellBitcoinsPage.style.css';
import { Trades } from 'src/view/components/Trades';

export const SellBitcoinsPage : FC = () => {
  const match = useRouteMatch();

  return (
    <div className="bitcoins-page">
      <Menu />
      <div className="content">
        <Switch>
          <Route path={`${match.url}/trades/:tradeHash`}>
            <Trades />
          </Route>
        </Switch>
      </div>
    </div>
  )
};

export default SellBitcoinsPage;