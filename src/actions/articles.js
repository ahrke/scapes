import axios from 'axios';

import { articlesConstants as ac } from '../reducers/articles';

const setArticles = (articles) => {
  return {
    type: ac.SET_ARTICLES,
    articles
  }
}

const setTags = (tags) => {
  return {
    type: ac.SET_TAGS,
    tags
  }
}

export const fetchArticles = () => dispatch => {
  const arrOfImg = [
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80',
    'https://images.unsplash.com/photo-1573648953114-ce9f86515a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    'https://images.unsplash.com/photo-1573591172652-f548fe02ef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80',
    'https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1512522156303-e02eda5e76e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1573572423030-a38737695cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80'
  ]
  return axios.get('http://localhost:3000/api/articles/')
    .then(res => {
      let articles = {};
      let tags = {};
      res.data.articles.forEach(article => {
        articles[article.slug] = article;
        articles[article.slug].img = arrOfImg[Math.floor(Math.random() * arrOfImg.length)]
        article.tagList.forEach(tag => {
          tags[tag] = tag
        })
      })
      dispatch(setTags(Object.keys(tags)))
      dispatch(setArticles(articles));
    })
    .catch(err => {
      console.error("==|=|> receiver ERROR:", err);
    })
}