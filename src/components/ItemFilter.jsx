import React from 'react';
import { useStore } from '../store/states';

const ItemFilter = () => {
  const items = useStore((state) => state.items);
  const updateFilter = useStore((state) => state.updateFilter);

  const doFilterChange = (e) => {
    const curVal = e.target.value;
    updateFilter(curVal);
    console.log(curVal);
  };

  return (
    <div className="">
      <div className="rounded">
        <input onChange={doFilterChange} type="text" placeholder="item filter" className="p-2 py-4 mt-2 mb-4 rounded w-full " id="itemFilter" />
      </div>
    </div>
  );
};

export default ItemFilter;
