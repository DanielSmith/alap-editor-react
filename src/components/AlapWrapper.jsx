// import React from 'react';
import { useEffect } from 'react';

import { useStore } from '../store/states';
import alap from 'alap';

const AlapWrapper = ({ alapConfig }) => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);

  let myAlap;

  useEffect(() => {
    myAlap = new alap();
    myAlap.configure({ alapConfig }, 'vue');
    myAlap.dumpConfig();
  }, [alap]);

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
  return <div className="mb-4"></div>;
};

export default AlapWrapper;
