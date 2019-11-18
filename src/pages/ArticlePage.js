import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchLikeArticle, fetchArticle } from '../actions/articles';

import Article from '../components/templates/Article';
import ArticleSidebar from '../components/organisms/ArticleSidebar';
import Comments from '../components/templates/Comments';

import './styles.css';

const ArticlePage = (props) => {
  
  let article = props.article || null;
  const [comments, setComments] = useState([]);

  console.log("==|> article:", article)
  
  useEffect(() => {
    if (!article) {
      props.getArticle(props.match.params.slug);
    }
    if (article) {
      axios.get('http://localhost:3000/api/articles/' + article.slug + '/comments', {
        headers: {
          Authorization: 'Token ' + localStorage.token
        }
      })
      .then(res => {
        setComments(res.data.comments);
      })
    }
  }, [article, props, props.refreshComments]);

  if (article) {
    return (
      <div className='article_page_container'>
        <ArticleSidebar description={article.description} liked={article.favorited} likeArticle={props.likeArticle} slug={article.slug} />
        <Article title={article.title} body={article.body} image={article.img} />
        <Comments article={article} comments={comments} />
      </div>
    )
  }

  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.articles,
  article: state.articles.currentArticle,
  refreshComments: state.updateComments
})

const mapDispatchToProps = dispatch => ({
  likeArticle: (liked, slug) => dispatch(fetchLikeArticle(liked, slug)),
  getArticle: (slug) => dispatch(fetchArticle(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);