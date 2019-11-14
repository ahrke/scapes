import React from 'react';

const Tag = ({ tag }) => {
  return (
    <div>
      <button className='tag_button'>
        {tag}
      </button>
    </div>
  )
}

export default Tag;