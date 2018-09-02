import React from 'react'
import LoginPage from './components/pages/login/loginPage';
import Main from './components/pages/main/mainPage';
import RegisterPage from './components/pages/register/registerPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

export default () =>
  (
    <Router>
      <Switch>
        <Route path="/" exact render={props => <Main {...props} />} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  )

