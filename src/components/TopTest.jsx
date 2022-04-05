import { useState } from 'react';
import { setTextRange } from 'typescript';
import { useStore } from '../store/states';
import AlapWrapper from './AlapWrapper';

const TopTest = ({ alapConfig }) => {
  const items = useStore((state) => state.items);
  const setSearchPhrase = useStore((state) => state.setSearchPhrase);
  const getSearchPhrase = useStore((state) => state.searchPhrase);
  const [search, setSearch] = useState(getSearchPhrase);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setSearchPhrase(e.target.value);
  };

  return (
    <div className=" flex flex-row grow align-middle justify-self-stretch mt-4 ">
      <label className="text-gray-100 text-md font-bold p-2 pr-6">Alap Data: </label>

      <input
        className="p-2  rounded-md w-1/2"
        aria-label="sample query (such as item ids, or a tag)"
        value={search}
        onChange={updateSearch}
        placeholder="enter sample query (such as item ids, or a .tag)"
        type="text"
      />

      <AlapWrapper alapConfig={alapConfig} />
    </div>
  );
};

export default TopTest;
