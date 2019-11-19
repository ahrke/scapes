import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticle } from '../../actions/articles';

import './styles.css';

const ArticleSample = ({ title, description, image, slug, i, setArticle }) => {
  return (
    <Link to={'/articles/' + slug} style={{ textDecoration: 'none', color: '#2b2b28' }} className='article_sample' onClick={e => setArticle(slug)} >
      <h3>{title}</h3>
      {image && <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.4)), url(${image})` }} className='article_img' />}
      <p>{description}</p>
    </Link>
  )
}

const mapDispatchToProps = dispatch => ({
  setArticle: (slug) => dispatch(fetchArticle(slug))
})

export default connect(null, mapDispatchToProps)(ArticleSample);