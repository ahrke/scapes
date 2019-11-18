import React from 'react';

import './styles.css';

const Comment = ({ comment }) => {
  return (
    <div>
      <h5>{comment.author.username}</h5>
      <p>{comment.body}</p>
      <span style={{ fontSize: '0.7em', color: '#757575' }}>Created On: {comment.createdAt}</span>
    </div>
  )
}

export default Comment;