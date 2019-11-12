import axios from 'axios';

import { articlesConstants as ac } from '../reducers/articles';

const setArticles = (articles) => {
  return {
    type: ac.SET_ARTICLES,
    articles
  }
}

export const fetchArticles = () => dispatch => {
  return axios.get('http://localhost:3000/api/articles/')
    .then(res => {
      let articles = {};
      res.data.articles.forEach(article => {
        articles[article.slug] = article
      })
      dispatch(setArticles(articles));
    })
    .catch(err => {
      console.error("==|=|> receiver ERROR:", err);
    })
}