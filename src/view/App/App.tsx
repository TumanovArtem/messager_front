import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchBitcoinRate } from 'src/store/bitcoinRateSlice';
import SellBitcoinsPage from 'src/view/pages/SellBitcoinsPage/SellBitcoinsPage';
import { Nav } from '../components/Nav';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchBitcoinRate());
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path='/sell-bitcoins'>
            <SellBitcoinsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
