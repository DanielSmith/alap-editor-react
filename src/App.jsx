import { useState, useEffect } from 'react';
import { handleDragEnd, handleDragOver, handleDragEnter, handleDrop } from './utils/dragdrop';

import { useStore } from './store/states';

import './styles/App.css';
import TopTest from './components/TopTest';
import ItemFilter from './components/ItemFilter';
import ItemList from './components/ItemList';
import AlapWrapper from './components/AlapWrapper';
import EditList from './components/EditList';
import ShortUniqueId from 'short-unique-id';

import { alapConfig } from './Config.js';
import { combine } from 'zustand/middleware';

function App() {
  const suid = new ShortUniqueId();
  const [count, setCount] = useState(0);

  const [topSection, setTopSection] = useState(true);
  const [allEditEntries, setAllEditEntries] = useState([]);

  const filter = useStore((state) => state.filter);

  const importData = useStore((state) => state.importData);
  // const alapData = useStore((state) => state.alapData);

  useEffect(() => {
    // Happens on mount

    // we may be getting incoming links which have no id
    const alapData = addItemIds(alapConfig);
    console.log(JSON.stringify(alapData));
    importData(alapData);
    return () => {
      // Optional; clean up before unmount
    };
  }, [alapConfig]);

  const addItemIds = (config) => {
    const workingData = { ...config };

    // not good, it would mean we have no data to work with, so we will punt...
    if (!workingData.allLinks) {
      workingData.allLinks = {};
      return workingData;
    }

    for (const curItem in workingData.allLinks) {
      if (!workingData.allLinks[curItem].id) {
        workingData.allLinks[curItem].id = suid();
      }
    }

    return workingData;
  };

  const toggleTop = () => {
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
    <div className=" bg-teal-900 min-h-screen " onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
      <div className="flex justify-center  gap-10   text-2xl p-4">
        {/* <!-- header --> */}

        <button className="bg-blue-600 text-yellow-200 p-4   rounded-lg  shadow-xl  ">Add new Alap item {filter} </button>

        <button onClick={toggleTop} className="bg-blue-600 text-yellow-200 p-4   rounded-lg  shadow-xl">
          Toggle test menu
        </button>
      </div>

      {/* <!-- main portion --> */}
      <div className="flex gap-10 ">
        <div className="flex flex-col w-96  px-10 rounded ">
          <ItemFilter />
          <ItemList />
        </div>
        <div className="flex-col ">
          {topSection && <TopTest />}
          <AlapWrapper />

          <EditList />
        </div>
      </div>
    </div>
  );
}

export default App;
