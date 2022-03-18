import alap from 'alap';
import React from 'react';
import { toEditorSettings } from 'typescript';
import { useStore } from '../store/states';
import EditItem from './EditItem';

const EditList = () => {
  const editItems = useStore((state) => state.editItems);

  return (
    <div className="">
      {editItems.map((curItem, index) => (
        <div className="border-green-800 hover:border-green-500  mb-4 rounded-md border-2 pt-4" key={curItem}>
          <EditItem item={curItem} />
        </div>
      ))}
    </div>
  );
};

export default EditList;
