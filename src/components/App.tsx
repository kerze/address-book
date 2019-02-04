import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import Router from './Router';

import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
