import React, { Component } from 'react';
import store from './../store';
import { Provider } from 'react-redux';
import Main from './../components/pages/main/mainPage';
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
          <Switch>
            <Main />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
