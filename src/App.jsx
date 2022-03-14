import { useState, useEffect } from 'react';
import { handleDragEnd, handleDragOver, handleDragEnter, handleDrop } from './utils/dragdrop';

import { useStore } from './store/states';

import './App.css';
import TopTest from './components/TopTest';
import ItemFilter from './components/ItemFilter';
import ItemList from './components/ItemList';
import AlapWrapper from './components/AlapWrapper';

import { XIcon, MinusCircleIcon, DuplicateIcon } from '@heroicons/react/solid';
import ShortUniqueId from 'short-unique-id';

import { alapConfig } from './Config.js';
// import ShortUniqueId from 'short-unique-id';

function App() {
  const [count, setCount] = useState(0);

  const [topSection, setTopSection] = useState(true);
  const [allEditEntries, setAllEditEntries] = useState([]);

  const items = useStore((state) => state.items);
  const filter = useStore((state) => state.filter);

  const suid = new ShortUniqueId();

  const importData = useStore((state) => state.importData);

  useEffect(() => {
    // Happens on mount
    importData(alapConfig);

    return () => {
      // Optional; clean up before unmount
    };
  }, [alapConfig]);

  const increaseItems = useStore((state) => state.increaseItems);

  const toggleTop = () => {
    increaseItems();
    setTopSection(!topSection);
  };

  const createNewItem = () => {
    const editEntryItem = {
      id: null,
      itemID: '',
      label: '',
      url: '',
      tags: '',
      newItem: null,
    };
  };

  return (
    <div className="App  bg-teal-900 " onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
      <div className="flex justify-center  gap-10   text-2xl p-4">
        {/* <!-- header --> */}

        <button className="bg-blue-600 text-yellow-200 p-4   rounded-lg  shadow-xl  ">Add new Alap item {filter} </button>

        <button onClick={toggleTop} className="bg-blue-600 text-yellow-200 p-4   rounded-lg  shadow-xl">
          Toggle test menu {items}
        </button>
      </div>

      {/* <!-- main portion --> */}
      <div className="flex gap-10">
        <div className="flex flex-col  px-20  border rounded ">
          <ItemFilter />
          <ItemList />
        </div>
        <div className="flex-col border">
          {topSection && <TopTest />}
          <AlapWrapper />

          <div className="row">rtowwowoi</div>
        </div>
      </div>
    </div>
  );
}

export default App;
