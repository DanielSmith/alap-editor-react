import alap from 'alap';
import { useEffect } from 'react';
// import { toEditorSettings } from 'typescript';
import { setScrollbarFade } from '../utils/scrollbars';
import { useStore } from '../store/states';
import EditItem from './EditItem';

const EditList = () => {
  const editItems = useStore((state) => state.editItems);

  useEffect(() => {
    setScrollbarFade('editList');
  }, []);

  return (
    <div className="pt-6 pr-4 overflow-y-scroll h-[calc(90vh_-_10rem)] box" id="editList">
      {editItems.map((curItem, index) => (
        <div className="border-green-800 hover:border-green-500  mb-4 rounded-md border-2 pt-4" key={curItem}>
          <EditItem item={curItem} />
        </div>
      ))}
    </div>
  );
};

export default EditList;
