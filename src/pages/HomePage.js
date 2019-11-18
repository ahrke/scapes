import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articles';

import ArticleSamplesList from '../components/templates/ArticleSamplesList'; 
import TagList from '../components/templates/TagList';
import FilterList from '../components/templates/FilterList';

import './styles.css';

const HomePage = ({articles, user}) => {

  return (
    <div className="homepage">
      <div className='homepage_sidebar'>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);