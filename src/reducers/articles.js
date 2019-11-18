const SET_ARTICLES = 'SET_ARTICLES';
const SET_ARTICLE_FILTER = 'SET_ARTICLE_FILTER';
const ADD_ARTICLE = 'ADD_ARTICLE';
const SET_ARTICLE = 'SET_ARTICLE';
const SET_TAGS = 'SET_TAGS';
const ADD_COMMENT = 'ADD_COMMENT';

export const articles = (state = { 
  updateComments: false, 
  likeArticle: false 
}, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return Object.assign({}, state, action.articles);
    case SET_ARTICLE_FILTER:
      return state;
    case SET_ARTICLE:
      return Object.assign({}, state, {currentArticle: action.article})
    case ADD_ARTICLE:
      return Object.assign({}, state, action.article);
    case SET_TAGS:
      return Object.assign({}, state, {tags: action.tags});
    case ADD_COMMENT:
      return Object.assign({}, state, {updateComments: !state.updateComments});
    default:
      return state;
  }
}

export const articlesConstants = {
  SET_ARTICLES,
  SET_ARTICLE_FILTER,
  ADD_ARTICLE,
  SET_ARTICLE,
  SET_TAGS,
  ADD_COMMENT
} 