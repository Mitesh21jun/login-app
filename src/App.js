import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UserWelcome from './components/UserWelcome';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Login-Form</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="form-wrapper">
        <div className="form-inner">
          <Switch>
            <Route exact path='/' component={LoginForm}  />
            <Route path="/sign-in" component={LoginForm}  />
            <Route path="/sign-up" component={SignupForm} />
            <Route path="/user-welcome" component={UserWelcome} />
                        
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
