import { useState } from 'react';
import { useStore } from '../store/states';

const EditItem = ({ item }) => {
  const alapData = useStore((state) => state.alapData);
  const cancelEditItem = useStore((state) => state.cancelEditItem);
  const removeItem = useStore((state) => state.removeItem);
  const patchItem = useStore((state) => state.patchItem);

  const [cur, setCur] = useState(alapData.allLinks[item]);

  let isExisting = true;
  if (cur.newItem) {
    isExisting = false;
  }

  const handleCancel = (item) => {
    cancelEditItem(item);
    if (!isExisting) {
      removeItem(item);
    }
  };

  const handleUpdateField = (e, which) => {
    setCur({
      ...cur,
      [which]: e.target.value,
    });

    console.log(cur);
  };

  const handleUpdate = (item) => {
    const itemToCheck = item;

    console.log(itemToCheck);
    console.log(cur);
    cancelEditItem(itemToCheck);
    if (!isExisting && cur.itemID !== itemToCheck) {
      removeItem(itemToCheck);
      patchItem(cur.itemID, cur);
    } else {
      patchItem(itemToCheck, cur);
    }
  };

  return (
    <div className="">
      {/* <!-- item id --> */}
      <div className="flex px-10">
        <div className="w-1/2 px-2">
          <label className="tracking-wide text-gray-200 text-md font-bold mb-2" htmlFor={'listItem_' + item}>
            Item ID
          </label>
          <input
            className="p-2 rounded-md w-full"
            aria-label="enter item id"
            type="text"
            placeholder="itemId"
            disabled={isExisting}
            defaultValue={item}
            onChange={(e) => handleUpdateField(e, 'itemID')}
            name={'listItemID_' + item}
            id={'listItemID_' + item}
          />
        </div>
        {/* <!-- label --> */}
        <div className="w-1/2 px-2">
          <label className="tracking-wide text-gray-200 text-md font-bold mb-2" htmlFor={'itemLabel_' + item}>
            Label
          </label>
          <input
            className="p-2 rounded-md w-full"
            aria-label="enter label"
            type="text"
            placeholder="label"
            defaultValue={cur.label}
            onChange={(e) => handleUpdateField(e, 'label')}
            name="'itemLabel_' + item"
            id="'itemLabel_' + 'item"
          />
        </div>
      </div>
      <div className="flex px-10">
        {/* <!-- URL--> */}
        <div className="w-full md:w-1/2 p-2">
          <label className="tracking-wide text-gray-200 text-md font-bold mb-2" htmlFor="itemURL_' + item">
            URL
          </label>
          <input
            className="p-2 rounded-md w-full"
            aria-label="enter url"
            type="text"
            placeholder="label"
            defaultValue={cur.url}
            onChange={(e) => handleUpdateField(e, 'url')}
            name="'itemURL_' + item"
            id="'itemURL_' + 'item"
          />
        </div>
        {/* <!-- tags--> */}
        <div className="w-full md:w-1/2 p-2">
          <label className="tracking-wide text-gray-200 text-md font-bold mb-2" htmlFor="itemTags_' + item">
            Tags
          </label>
          <input
            className="p-2 rounded-md w-full"
            aria-label="enter tags"
            type="text"
            placeholder="label"
            defaultValue={cur.tags}
            onChange={(e) => handleUpdateField(e, 'tags')}
            name="'itemTags_' + item"
            id="'itemTags_' + 'item"
          />
        </div>
      </div>

      {/* <!-- edit item options --> */}
      <div className="flex flex-row w-full p-4 flex-wrap justify-evenly">
        <div className="px-2 space-x-2 filter mb-2 drop-shadow-2xl">
          <button className="bg-gray-400 p-1 w-48 px-4 text-teal-900 rounded-2xl" onClick={() => handleCancel(item)}>
            Cancel
          </button>
        </div>
        <div className="px-2 space-x-2">
          <button className="bg-blue-700 p-1 w-48 px-4 hover:drop-shadow-xl hover:text-teal-100 text-white rounded-2xl disabled:opacity-60" onClick={() => handleUpdate(item)}>
            Update Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
