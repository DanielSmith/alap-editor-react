import { useState, useEffect } from 'react';
import { useStore } from '../store/states';
import alap from 'alap';

const AlapWrapper = ({ alapConfig }) => {
  const items = useStore((state) => state.items);
  const alapData = useStore((state) => state.alapData);

  const [displayStatus, setDisplayStatus] = useState('hidden');
  const [elementTargets, setElementTargets] = useState({});

  const ESC_KEYCODE = 27;
  const menuTimeout = 3000;
  let curTimerID = null;

  const mev = {};
  let myAlap = null;

  // useEffect(() => {
  //   myAlap = new alap();
  //   myAlap.configure({ alapConfig }, 'react');
  //   myAlap.dumpConfig();
  // }, [alap]);'

  if (!myAlap) {
    myAlap = new alap();
  }

  // this is called too much...
  // should proably useEffect on the config...
  myAlap.configure({ alapConfig }, 'react');
  // myAlap.dumpConfig();

  useEffect(() => {
    if (alapData && alapData.allLinks) {
      // console.dir(alapData.allLinks);
    }
  }, [alapData]);

  const removeMenu = () => {
    stopTimer();
    removeListeners();
    setDisplayStatus('hidden');
  };

  const bodyClickHandler = (event) => {
    let inMenu = event.target.closest('#alapElem');

    if (!inMenu) {
      removeMenu();
    }
  };

  const bodyKeyHandler = (event) => {
    if (event.keyCode == ESC_KEYCODE) {
      removeMenu();
    }
  };

  const removeListeners = () => {
    document.body.removeEventListener('click', bodyClickHandler);
    document.body.removeEventListener('keydown', bodyKeyHandler);
  };

  const addListeners = () => {
    document.body.addEventListener('click', bodyClickHandler);
    document.body.addEventListener('keydown', bodyKeyHandler);
  };

  const menuMouseLeaveHandler = (event) => {
    startTimer();
  };

  const menuMouseEnterHandler = (event) => {
    stopTimer();
  };

  const startTimer = () => {
    if (curTimerID) {
      clearTimeout(curTimerID);
    }
    curTimerID = setTimeout(removeMenu, menuTimeout);
  };

  const stopTimer = () => {
    clearTimeout(curTimerID);
    curTimerID = null;
  };

  // click event
  const alapClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    stopTimer();
    removeListeners();
    addListeners();

    setDisplayStatus('inline-block');

    mev.theEventProperties = {
      target: event.target,
      pageX: event.pageX,
      pageY: event.pageY,
    };

    setElementTargets(
      myAlap.processEvent(mev.theEventProperties, {
        ...alapConfig,
      })
    );

    //    console.log(ed);
  };

  return (
    <div className="relative flex flex-col" onMouseLeave={menuMouseLeaveHandler} onMouseEnter={menuMouseEnterHandler}>
      <a className="alap text-gray-100 underlinetext-md font-bold px-4 py-2 pr-6" data-alap-linkitems=".nyc" onClick={alapClick}>
        My Sample Link....
      </a>

      <div id="alapElem" className={`absolute ${displayStatus} z-10  mt-10 text-xl p-20 bg-slate-100`}>
        stuff
        <ul>
          {elementTargets.theTargets &&
            elementTargets.theTargets.map((curItem, index) => (
              <li key={curItem}>
                <a target="fromAlap" href={alapData.allLinks[curItem].url}>
                  {alapData.allLinks[curItem].label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AlapWrapper;
