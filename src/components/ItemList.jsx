import { useState, useEffect } from 'react';
import { useStore } from '../store/states';

const ItemList = () => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);
  const filter = useStore((state) => state.filter);

  const [filterItems, setFilterItems] = useState([]);

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

  return (
    <section>
      <ul className="text-6">
        <li>{filterItems.length} </li>
        {filterItems.map((curItem, index) => (
          <li key={index}>{curItem}</li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
