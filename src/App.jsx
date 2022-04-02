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
    // console.log(JSON.stringify(alapData));
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
    <div className="bg-blue-800 min-h-screen " onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
      <div className="fixed mx-auto w-full z-10  bg-opacity-60 ">
        <div className="flex justify-center  gap-10    h-[calc(h-full_-_10rem)]  text-2xl p-4">
          {/* <!-- header --> */}

          <button className="bg-blue-600 text-yellow-200 p-4 rounded-lg  shadow-xl ">Add new Alap item</button>
        </div>
      </div>

      {/* <!-- main portion --> */}
      <div className="flex gap-10 pt-20 w-full">
        <div className="relative  px-10 ">
          <div className="fixed flex z-20 p-4 ">
            <div className=" w-[16rem] ">
              <ItemFilter />
            </div>
          </div>
          <ItemList />
        </div>
        <div className="fixed ml-[22rem] p-4 flex-col  w-2/3 ">
          {topSection && <TopTest />}
          <AlapWrapper />

          <EditList />
        </div>
      </div>
    </div>
  );
}

export default App;
