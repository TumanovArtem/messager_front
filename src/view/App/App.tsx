import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SELL_BITCOINS_PATH } from 'src/constants/routes';
import { fetchBitcoinRate } from 'src/store/slices';
import SellBitcoinsPage from 'src/view/pages/SellBitcoinsPage/SellBitcoinsPage';
import { Nav } from '../components/Nav';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchBitcoinRate());
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path={SELL_BITCOINS_PATH}>
            <SellBitcoinsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
