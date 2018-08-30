import React, { Component } from 'react';
import store from './../store';
import { Provider } from 'react-redux';
import Main from './../components/pages/main/mainPage';
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Main />
      </Provider>

    );
  }
}

export default App;
