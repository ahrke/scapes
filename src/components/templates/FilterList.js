import React from 'react';

import FilterButton from '../atoms/FilterButton';

const FilterList = () => {
  return (
    <div>
      <h4 className="tag_list_title">filters</h4>
      <div className="tag_list_container">
        <FilterButton filter="author" />
        <FilterButton filter="some other thing" />
        <FilterButton filter="it's blue" />
      </div>
    </div>
  )
}


export default FilterList;