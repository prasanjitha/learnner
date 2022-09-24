import logo from './logo.svg';
import './App.css';
import RouteNavBar from './components/navBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Product from './components/product';
import DashBoard from './components/dashboard';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <RouteNavBar />
      <div className='context'>
        <Switch>

          <Route path="/products" component={Product} />
          <Route path="/admin" component={DashBoard} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>



      </div>
    </div>
  );
}

export default App;
