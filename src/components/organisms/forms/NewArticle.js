import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchPostArticles } from '../../../actions/articles';

const NewArticle = ({ user, postArticle }) => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [body, setBody] = useState('');
  let [tags, setTags] = useState('');

  const buildArticle = () => {
    let tagsArr = tags.trim().split(',');

    return {
      title,
      description,
      body,
      tagList: tagsArr
    }
  }

  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <div className='new_article_form_container'>
      <h2 style={{ margin: '30px auto', color: 'white' }}>New Article</h2>
      <p className='new_article_labels'>title</p>
      <input 
        type='text' placeholder='title' className='new_article_form_items'
        onChange={e => setTitle(e.target.value)} />
      <p className='new_article_labels'>description</p>
      <input 
        type='text' placeholder='description of your piece to share' className='new_article_form_items'
        onChange={e => setDescription(e.target.value)}  />
      <p className='new_article_labels'>what do you want to say?</p>
      <textarea 
        type='' className='new_article_form_items' style={{ height: '500px' }}
        onChange={e => setBody(e.target.value)}  />
      <p className='new_article_labels'>tags</p>
      <input 
        type='text' placeholder='tags (separated by commas please)' className='new_article_form_items'
        onChange={e => setTags(e.target.value)}  />
      <button className='new_article_form_items' onClick={e => {
        e.preventDefault();
        postArticle(buildArticle());
      }}>
        submit
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  postArticle: (article) => dispatch(fetchPostArticles(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);