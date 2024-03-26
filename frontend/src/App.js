import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
