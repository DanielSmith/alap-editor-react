import { useState, useEffect } from 'react';
import { handleDragEnd, handleDragOver, handleDragEnter } from './utils/dragdrop';

import { useStore } from './store/states';

import './styles/App.css';
import TopTest from './components/TopTest';
import ItemFilter from './components/ItemFilter';
import ItemList from './components/ItemList';
import EditList from './components/EditList';
import InfoBlurb from './components/InfoBlurb';
import ShortUniqueId from 'short-unique-id';
import { alapConfig } from './Config.js';

function App() {
  const suid = new ShortUniqueId();
  const addEditItem = useStore((state) => state.addEditItem);
  const importData = useStore((state) => state.importData);
  const patchItem = useStore((state) => state.patchItem);
  const editItems = useStore((state) => state.editItems);

  useEffect(() => {
    // we may be getting incoming links which have no id
    const alapData = addItemIds(alapConfig);
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

  const createNewItem = () => {
    const cloneName = suid();
    const itemID = `_new_item_${cloneName}`;

    const newEditEntryItem = {
      id: cloneName,
      itemID: itemID,
      label: '',
      url: '',
      tags: '',
      newItem: true,
    };

    patchItem(itemID, newEditEntryItem);
    addEditItem(itemID);
  };

  const createTagFromURL = (str) => {
    const url = document.createElement('a');
    url.href = str;

    const elems = url.hostname.split('.');
    elems.pop();
    return elems.join('_');
  };

  const handleDrop = async (event) => {
    event.preventDefault();

    const link = event.dataTransfer.getData('Text');

    try {
      // need a better way of specifying where the netlify server is for dev..
      const res = await fetch('/.netlify/functions/get-site-data', {
        method: 'POST',
        body: JSON.stringify({ sitelink: link }),
      });

      const data = await res.json();
      console.dir(data);

      const url = data.res.url || link;
      let tags = createTagFromURL(url);

      if (data.res.keywords) {
        tags += `, ${data.res.keywords}`;
      }

      const cloneName = suid();
      const itemID = `_new_item_${cloneName}`;

      const newEditEntryItem = {
        id: cloneName,
        itemID: itemID,
        label: data.res.title,
        url: url,
        tags: tags,
        newItem: true,
      };

      patchItem(itemID, newEditEntryItem);
      addEditItem(itemID);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-blue-800 min-h-screen " onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
      <div className="fixed mx-auto w-full z-10  bg-opacity-60 ">
        <div className="flex justify-center  gap-10 h-[calc(h-full_-_10rem)]  text-2xl p-4">
          {/* <!-- header --> */}

          <button className="bg-blue-600 text-yellow-200 p-4 rounded-lg  shadow-xl" onClick={createNewItem}>
            Add new Alap menu item
          </button>
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
        <div className="fixed ml-[22rem] p-4 flex-col w-2/3 ">
          <TopTest alapConfig={alapConfig} />
          {editItems.length ? <EditList /> : <InfoBlurb />}
        </div>
      </div>
    </div>
  );
}

export default App;
