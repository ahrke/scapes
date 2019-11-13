import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articles';

import ArticleSamplesList from '../components/templates/ArticleSamplesList'; 

const HomePage = ({articles}) => {
  console.log("==|> from Home, articles:",articles)
  return (
    <div>
      <h2>Home Page</h2>
      <ArticleSamplesList articles={Object.keys(articles).map(key => articles[key])} />
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  doFetchArticles: dispatch(fetchArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);