const SET_ARTICLES = 'SET_ARTICLES';
const SET_ARTICLE_FILTER = 'SET_ARTICLE_FILTER';
const ADD_ARTICLE = 'ADD_ARTICLE';

export const articles = (state = {}, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return Object.assign({}, state, action.articles);
    case SET_ARTICLE_FILTER:
      return state;
    case ADD_ARTICLE:
      return Object.assign({}, state, action.article);
    default:
      return state;
  }
}

export const articlesConstants = {
  SET_ARTICLES,
  SET_ARTICLE_FILTER,
  ADD_ARTICLE
} 