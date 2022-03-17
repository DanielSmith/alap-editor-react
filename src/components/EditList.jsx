import alap from 'alap';
import React from 'react';
import { toEditorSettings } from 'typescript';
import { useStore } from '../store/states';
import EditItem from './EditItem';

const EditList = () => {
  const editItems = useStore((state) => state.editItems);
  const items = useStore((state) => state.items);

  return (
    <div className="">
      EditList {items} {editItems}
      {editItems.map((curItem, index) => (
        <EditItem item={curItem} />
      ))}
    </div>
  );
};

export default EditList;
// <div key="index">{curItem}</div>
