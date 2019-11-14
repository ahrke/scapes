import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';

import Header from './components/templates/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArticlePage from './pages/ArticlePage';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/articles/:slug' component={ArticlePage} />
      </Switch>
    </Provider>
  );
}

export default App;
