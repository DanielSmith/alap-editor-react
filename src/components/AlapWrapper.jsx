import React from 'react';
import { useStore } from '../store/states';
import alap from 'alap';

const AlapWrapper = () => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);

  const handleImageClick = (event) => {
    console.dir(event);
  };

  const curItem = alapData.allLinks['bmwe36'];
  return (
    <div>
      <p>
        {curItem.label} {curItem.url}
      </p>

      <div className="dropdown">
        <a href="#" className=" dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown where items go
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button className="dropdown-item" type="button">
              Action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
      <ul>
        <li>hello</li>
      </ul>
    </div>
  );
};

export default AlapWrapper;
