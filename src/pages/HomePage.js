import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articles';

const HomePage = ({articles}) => {
  console.log("==|> from Home, articles:",articles)
  return (
    <h2>Home Page</h2>
    
  )
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  doFetchArticles: dispatch(fetchArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);