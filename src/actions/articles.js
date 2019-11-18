import axios from 'axios';

import { articlesConstants as ac } from '../reducers/articles';

const BASE_URI = 'http://localhost:3000/api';
const headersWithAuth = {
  headers: {
    Authorization: 'Token ' + localStorage.token
  }
}

const arrOfImg = [
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80',
  'https://images.unsplash.com/photo-1573591172652-f548fe02ef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80',
  'https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1512522156303-e02eda5e76e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1573572423030-a38737695cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80'
]

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

const addComment = () => {
  return {
    type: ac.ADD_COMMENT
  }
}

const setCurrentArticle = (article) => {
  return {
    type: ac.SET_ARTICLE,
    article
  }
}

export const fetchPostArticles = (article) => dispatch => {
  return axios.post(BASE_URI + '/articles', {
    article
  }, headersWithAuth)
    .then(res => {
      console.log("==|==|> from postArticles:",res.data)
    })
    .catch(err => console.error("==|> error from post/articles:", err))
}

export const fetchArticles = () => dispatch => {
  
  return axios.get(BASE_URI + '/articles/')
    .then(res => {
      let articles = {};
      let tags = {};
      res.data.articles.forEach(article => {
        articles[article.slug] = article;
        if (!article.img) articles[article.slug].img = arrOfImg[Math.floor(Math.random() * arrOfImg.length)]
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

export const fetchArticle = slug => dispatch => {
  return axios.get(BASE_URI + '/articles/' + slug)
    .then(res => {
      let article = res.data.article;
      if (!article.img) article.img = arrOfImg[Math.floor(Math.random() * arrOfImg.length)]
      dispatch(setCurrentArticle(article))
    })
}

export const fetchPostComment = (slug, body) => dispatch => {
  const commentPostUrl = BASE_URI + '/articles/' + slug + '/comments';
  axios.post(commentPostUrl, {
    comment: {
      body
    }
  }, headersWithAuth)
    .then(res => {
      dispatch(addComment());
    })
    .catch(err => console.error("Error from adding comment to article:", err))
}

export const fetchLikeArticle = (liked, slug) => dispatch => {
  const likeUrl = BASE_URI + '/articles/' + slug + '/favorite';
  const unFavorite = () => axios.delete(likeUrl, headersWithAuth);
  const favorite = () => axios.post(likeUrl, {}, headersWithAuth);

  if (liked) {
    unFavorite().then(res => {
      dispatch(setCurrentArticle(res.data.article))
    })
  } else {
    favorite().then(res => {
      dispatch(setCurrentArticle(res.data.article))
    })
  }
}