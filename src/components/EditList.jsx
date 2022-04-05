import { useEffect } from 'react';
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
        <div className="transition ease-in-out  border-blue-900 hover:border-blue-500 duration-1000  mb-4 rounded-md border-2 pt-4" key={curItem}>
          <EditItem item={curItem} />
        </div>
      ))}
    </div>
  );
};

export default EditList;
