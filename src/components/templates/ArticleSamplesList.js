import React from 'react';

import ArticleSample from '../molecules/ArticleSample';

const ArticleSampleList = ({articles}) => {
  return (
    <div className='article_sample_list'>
      {articles.map((article, i) => {
        return (
          <ArticleSample key={article.slug} slug={article.slug} title={article.title} description={article.description} image={article.img} i={i} />
        )
      })}
    </div>
  )
}

export default ArticleSampleList;