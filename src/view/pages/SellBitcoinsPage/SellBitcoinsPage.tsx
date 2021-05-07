import React, {FC, useCallback, useEffect} from 'react';
import { Menu } from 'src/view/components/Menu';
import { Messager } from 'src/view/components/Messager';
import { UserInfo } from 'src/view/components/UserInfo';
import { Trades } from 'src/view/components/Trades';
import './SellBitcoinsPage.style.css';
import { Route, useLocation, useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NO_OPEN_TRADES } from 'src/constants/constants';
import { changeCurrentTrade, getCurrentTradeSelector, getTradesSelector } from 'src/store/slices';
import { ITrade } from 'src/interfaces/ITrade';

export const SellBitcoinsPage : FC = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const location = useLocation();
  const trades = useSelector(getTradesSelector);;
  const currentTrade = useSelector(getCurrentTradeSelector);

  const setCurrentTrade = useCallback(() => {
    const id = location.pathname.split('/')[3];
    const currentTradeId = id !== '' ? Number(id) : NaN;
    const trade = Number.isFinite(currentTradeId) ? trades.find((trade : ITrade) => trade.id === currentTradeId) : null;
    if (trade?.id === 0) {
      dispatch(changeCurrentTrade(0));
    } else {
      dispatch(changeCurrentTrade(trade?.id || null));
    }
  }, [dispatch, location.pathname, trades]);

  useEffect(() => {
    setCurrentTrade();
  }, [setCurrentTrade]);
  
  return (
    <div className="bitcoins-page">
      <Menu />
      <div className="content">
        <Switch>
          <Route path={`${match.url}/trades`}>
            {!trades.length ? <h1 className="no-open-trades">{NO_OPEN_TRADES}</h1> : (
              <>
                <Trades />
                {currentTrade?.hash && (
                  <>
                    <Messager />
                    <UserInfo />
                  </>
                )}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  )
};

export default SellBitcoinsPage;