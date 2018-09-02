import React, { Component } from 'react';
import store from './../store';
import { Provider } from 'react-redux';
import Nav from './../components/pages/nav/nav';
import Main from './../components/pages/main/mainPage';
import LoginPage from './../components/pages/login/loginPage';
import RegisterPage from './../components/pages/register/registerPage';
// import Routes from './../routes';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/" exact render={props => <Main {...props} />} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
