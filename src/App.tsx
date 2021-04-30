import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SellBitcoinsPage from './SellBitcoinsPage/SellBitcoinsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/sell-bitcoins'>
            <SellBitcoinsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
