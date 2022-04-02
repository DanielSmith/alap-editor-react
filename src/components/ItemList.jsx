import { useState, useEffect } from 'react';
import { useStore } from '../store/states';
import { setScrollbarFade } from '../utils/scrollbars';
import ShortUniqueId from 'short-unique-id';

import Dialog from './Dialog';

import { XIcon, MinusCircleIcon, DuplicateIcon, CurrencyBangladeshiIcon } from '@heroicons/react/solid';

const ItemList = () => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);
  const filter = useStore((state) => state.filter);
  // const edt = useStore((state) => state.edt);

  const setItem = useStore((state) => state.setItem);
  const addEditItem = useStore((state) => state.addEditItem);
  const cancelEditItem = useStore((state) => state.cancelEditItem);
  const patchItem = useStore((state) => state.patchItem);

  const [filterItems, setFilterItems] = useState([]);
  const [dialogActive, setDialogActive] = useState(false);
  const [possibleRemoveItem, setPossibleRemoveItem] = useState(null);

  const suid = new ShortUniqueId();

  // for new items, clone from this
  const editEntryItem = {
    id: null,
    itemID: '',
    label: '',
    url: '',
    tags: '',
    newItem: null,
  };

  // just once..
  useEffect(() => {
    setScrollbarFade('itemList');
  }, []);

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

    const cloneName = suid();
    // alert(cloneName);

    const curEntryItem = Object.create(alapData.allLinks[item]);
    curEntryItem.itemID = `${item}_copy_${cloneName}`;

    // we expect the user will edit the ID, so we have a copy of the original
    // that we can clean up
    curEntryItem.originalItemID = `${item}_copy_${cloneName}`;
    curEntryItem.newItem = true;
    // setItem(curEntryItem);
    // alapData.allLinks[curEntryItem.itemID] = curEntryItem;
    patchItem(curEntryItem.itemID, curEntryItem);

    addEditItem(curEntryItem.itemID);

    // create a new item
    // add it to the master list
    // add it to the edit list
  };

  const editEntry = (item) => {
    const str = JSON.stringify(alapData.allLinks[item]);
    // alert(str);
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
    <section className="pt-[5rem] w-full ">
      {dialogActive && <Dialog cancelHandler={cancelHandler} confirmHandler={confirmHandler} />}
      <div className="  text-yellow-200 overflow-y-scroll bg-blue-800 p-4 mt-4 flex flex-col  gap-6  h-[calc(90vh_-_10rem)]   border-3  box " id="itemList">
        {filterItems.map((curItem, index) => (
          <div key={index} className="flex p-2  group shadow-xlg  bg-blue-700 hover:bg-blue-600  border-1  gap-4   rounded-lg contentcenter">
            <button className="opacity-100  text-left w-[10rem] truncate overflow-ellipsis py-2 px-4  overflow-hidden" onClick={() => editEntry(curItem)}>
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
