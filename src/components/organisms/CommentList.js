import React from 'react';

import Comment from '../molecules/Comment';

const CommentList = ({ comments }) => {
  return (
    <div className='comment_list_container'>
      <h4>Comments</h4>
      <hr></hr>
      {comments.length === 0 && <h5>No comments...yet</h5>}
      {comments && comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}

export default CommentList;