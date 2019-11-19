import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import './styles.css';

const ArticleSidebar = ({ slug, description, liked, likeArticle }) => {
  const handleOnClick = () => {
    likeArticle(liked, slug)
  }

  return (
    <div className='article_sidebar'>
      <h3>Sidebar</h3>
      <p>{description}</p>
      {(liked ? <IoIosHeart size='1.5em' onClick={e => handleOnClick()} /> : <IoIosHeartEmpty size='1.5em' onClick={e => handleOnClick()} />)}
    </div>
  )
}

export default ArticleSidebar;