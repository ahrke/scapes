import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ArticleSample = ({ title, description, image, slug, i }) => {
  return (
    <Link to={'/articles/' + slug} className='article_sample'>
      <h3>{title}</h3>
      {image && <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.4)), url(${image})` }} className='article_img' />}
      <p>{description}</p>
    </Link>
  )
}

export default ArticleSample;