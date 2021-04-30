import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SellBitcoinsPage from 'src/view/pages/SellBitcoinsPage/SellBitcoinsPage';
import { Nav } from '../components/Nav';
import './App.css';

function App() {
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
