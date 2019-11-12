import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';

import HomePage from './pages/HomePage';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Provider>
  );
}

export default App;
