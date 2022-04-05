import React from 'react';
import { useStore } from '../store/states';

const ItemFilter = () => {
  const updateFilter = useStore((state) => state.updateFilter);

  const doFilterChange = (e) => {
    const curVal = e.target.value;
    updateFilter(curVal);
    console.log(curVal);
  };

  return (
    <div className=" ">
      <input onChange={doFilterChange} type="text" placeholder="item filter" className="p-2  mt-4 mb-4 rounded-lg w-full " id="itemFilter" />
    </div>
  );
};

export default ItemFilter;
