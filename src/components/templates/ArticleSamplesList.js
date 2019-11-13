import React from 'react';

import ArticleSample from '../molecules/ArticleSample';

const ArticleSampleList = ({articles}) => {
  return (
    <div>
      <ul style={{ listStyle: 'none' }} >
        {articles.map(article => {
          return (
            <li key={article.slug}>
              <ArticleSample title={article.title} description={article.description} image={null} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ArticleSampleList;