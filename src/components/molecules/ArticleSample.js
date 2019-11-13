import React from 'react';

const ArticleSample = ({ title, description, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      {image && <img src={image} />}
      <p>{description}</p>
    </div>
  )
}

export default ArticleSample;