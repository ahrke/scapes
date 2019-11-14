import React from 'react';

const ArticlePage = () => {
  return (
    <div className='article_page_container'>
      <h2>{title}</h2>
      <img src={image} />
      <p>{body}</p>
    </div>
  )
}

export default ArticlePage;