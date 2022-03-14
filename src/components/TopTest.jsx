import React from 'react';
import { useStore } from '../store/states';

const TopTest = () => {
  const items = useStore((state) => state.items);
  return (
    <div className="">
      <div className="text-6xl text-blue-400">
        <label htmlFor="testinput" className="col-sm-2 col-form-label">
          label:
        </label>
        <div className="col-sm-5">
          <input id="testinput" type="text" className="form-control" />
        </div>
        <div className="col-sm-2">
          <a href="#"> some link {items} </a>
        </div>
      </div>
    </div>
  );
};

export default TopTest;
