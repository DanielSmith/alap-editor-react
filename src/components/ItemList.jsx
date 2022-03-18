import { useState, useEffect } from 'react';
import { useStore } from '../store/states';

import Dialog from './Dialog';

import { XIcon, MinusCircleIcon, DuplicateIcon } from '@heroicons/react/solid';

const ItemList = () => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);
  const filter = useStore((state) => state.filter);
  // const edt = useStore((state) => state.edt);

  const addEditItem = useStore((state) => state.addEditItem);
  const cancelEditItem = useStore((state) => state.cancelEditItem);

  const [filterItems, setFilterItems] = useState([]);
  const [dialogActive, setDialogActive] = useState(false);
  const [possibleRemoveItem, setPossibleRemoveItem] = useState(null);

  useEffect(() => {
    // Happens on mount
    if (alapData.allLinks) {
      let curItems = [];

      if (filter === '' || filter === null) {
        curItems = Object.keys(alapData.allLinks).sort();
      } else {
        curItems = Object.keys(alapData.allLinks)
          .sort()
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
      }

      setFilterItems(curItems);
    }

    return () => {
      // Optional; clean up before unmount
    };
  }, [alapData, filter]);

  const confirmRemoveEntry = (item) => {
    console.log(item);
    console.log('confirmRemoveEntry  ' + item);
    setPossibleRemoveItem(item);
    setDialogActive(true);
  };

  const cloneEntry = (item) => {
    console.log(item);
    console.log('cloneEntry  ' + item);
  };

  const editEntry = (item) => {
    addEditItem(item);
  };

  const cancelHandler = () => {
    setDialogActive(false);
  };

  const confirmHandler = () => {
    if (possibleRemoveItem) {
      cancelEditItem(possibleRemoveItem);
    }
    setDialogActive(false);
  };

  return (
    <section>
      {dialogActive && <Dialog cancelHandler={cancelHandler} confirmHandler={confirmHandler} />}
      <div className="text-6  gap-3 flex flex-col border-3  ">
        {filterItems.map((curItem, index) => (
          <div key={index} className="flex p-2  group shadow-xlg  bg-green-700 hover:bg-green-600  border-1   rounded-lg contentcenter">
            <button className="opacity-100  text-left w-3/4 truncate overflow-ellipsis py-2 px-4  overflow-hidden" onClick={() => editEntry(curItem)}>
              {curItem}
            </button>
            <XIcon
              onClick={() => confirmRemoveEntry(curItem)}
              className="hover:cursor-pointer opacity-0  transition ease-in-out duration-500 group-hover:opacity-100 hover-target w-5 mr-2  text-red-700"
            />
            <DuplicateIcon onClick={() => cloneEntry(curItem)} className="hover:cursor-pointer opacity-0  transition ease-in-out duration-500 group-hover:opacity-100 w-5  text-green-200" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
