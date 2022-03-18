// import React from 'react';
import { useEffect } from 'react';

import { useStore } from '../store/states';
import alap from 'alap';

const AlapWrapper = () => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);

  useEffect(() => {
    if (alapData && alapData.allLinks) {
      console.dir(alapData.allLinks);
    }
  }, [alapData]);

  // const handleImageClick = (event) => {
  //   console.dir(event);
  // };

  // console.dir(alapData);

  // const curItem = alapData.allLinks['bmwe36'];
  return (
    <div>
      <hr />
    </div>
  );
};

export default AlapWrapper;
