import React from 'react';
import { connect } from 'react-redux';
import { fetchPostComment } from '../../actions/articles';

import CommentList from '../organisms/CommentList';
import NewCommentForm from '../organisms/forms/NewCommentForm';

const Comments = ({ comments, article, addComment }) => {
  return (
    <div className='comments_container'>
      <CommentList comments={comments} />
      <NewCommentForm slug={article.slug} addComment={addComment} />
    </div>
  )
}


const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  addComment: (slug, body) => dispatch(fetchPostComment(slug, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
