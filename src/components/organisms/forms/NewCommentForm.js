import React, { useState } from 'react';

import './styles.css';

const NewCommentForm = ({ addComment, slug }) => {
  const [body, setBody] = useState('');

  return (
    <div className='comment_form'>
      <input type='text' placeholder='your comment...' onChange={e => setBody(e.target.value)} value={body} />
      <button type='button' onClick={e => {
        e.preventDefault();
        addComment(slug, body);
        setBody('');
      }} >Submit</button>
    </div>
  )
}

export default NewCommentForm;