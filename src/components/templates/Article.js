import React from 'react';

import './styles.css';

const Article = ({ title, image, body }) => {

  return (
    <div className='article_container'>
      <h1>{title}</h1>
      <div src={image} style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.4)), url(${image})` }} className='image' />
      <p>{body}</p>
    </div>
  )
}

export default Article;