import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchArticles } from '../actions/articles';
import { fetchGetUser } from '../actions/users';

import ArticleSamplesList from '../components/templates/ArticleSamplesList'; 
import TagList from '../components/templates/TagList';
import FilterList from '../components/templates/FilterList';

import './styles.css';

const HomePage = ({articles, user}) => {

  if (!user) {
    return (
      <div>
        <Redirect to='/login' />
      </div>
    )
  }
  return (
    <div className="homepage">
      <div>
        <TagList />
        <FilterList />
      </div>
      <ArticleSamplesList articles={Object.keys(articles).map(key => articles[key])} />
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.articles,
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  doFetchArticles: dispatch(fetchArticles()),
  fetchUser: () => dispatch(fetchGetUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);