import React from 'react';
import { connect } from 'react-redux';

import Tag from '../atoms/Tag';

const TagList = ({ tags }) => {
  return (
    <div>
      <h4 className="tag_list_title">tags</h4>
      <div className="tag_list_container">
        {tags && tags.map((tag, i) => {
          return <Tag key={i} tag={tag} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tags: state.articles.tags
})

export default connect(mapStateToProps)(TagList);