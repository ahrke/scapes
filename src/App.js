import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/templates/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArticlePage from './pages/ArticlePage';
import NewArticle from './components/organisms/forms/NewArticle';

import { fetchGetUser } from './actions/users';

import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/articles/new' component={NewArticle} />
        <Route path='/articles/:slug' component={ArticlePage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchGetUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
