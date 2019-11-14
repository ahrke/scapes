import React from 'react';

const FilterButton = ({ filter }) => {
  return (
    <div>
      <button className='filter_button'>
        {filter}
      </button>
    </div>
  )
}

export default FilterButton;