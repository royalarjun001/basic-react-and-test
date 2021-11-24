import './App.css';
import StoreLocator from './StoreLocator';
import StateExample from '../components/StateExample';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div data-testid="app-element" className="app-container">
      <Router>
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Store Locator </Link></li>
            <li><Link to={'/use-state'} className="nav-link" data-testid="state-link"> useState </Link></li>
          </ul>
        <Routes>
          <Route path='/' element={<StoreLocator />} />
          <Route path='/use-state' element={<StateExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
