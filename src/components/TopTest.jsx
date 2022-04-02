import React from 'react';
import { useStore } from '../store/states';

const TopTest = () => {
  const items = useStore((state) => state.items);
  return (
    <div className=" flex flex-row grow align-middle justify-self-stretch mt-4 ">
      <label className="text-gray-100 text-md font-bold p-2 pr-6">Alap Data: </label>

      <input className="p-2  rounded-md w-1/2" aria-label="sample query (such as item ids, or a tag)" placeholder="enter sample query (such as item ids, or a .tag)" type="text" />

      <a className="alap text-gray-100 underlinetext-md font-bold px-4 py-2 pr-6">Sample Link....</a>
    </div>
  );
};

export default TopTest;
