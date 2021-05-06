import React, {FC} from 'react';
import { Menu } from 'src/view/components/Menu';
import { Messager } from 'src/view/components/Messager';
import { UserInfo } from 'src/view/components/UserInfo';
import { Trades } from 'src/view/components/Trades';
import './SellBitcoinsPage.style.css';
import { Route, useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom';
import { IStoreState } from 'src/interfaces/store';
import { useSelector } from 'react-redux';

export const SellBitcoinsPage : FC = () => {
  const match = useRouteMatch();
  const trades = useSelector((state : IStoreState) => state.trades.data);
  
  return (
    <div className="bitcoins-page">
      <Menu />
      <div className="content">
        <Switch>
          <Route path={`${match.url}/trades`}>
            {!trades.length ? <h1 className="no-open-trades">Sorry, there is no open trades</h1> : (
              <>
                <Trades />
                <Messager />
                <UserInfo />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  )
};

export default SellBitcoinsPage;