const handleDragEnter = (event) => {
  event.preventDefault();

  console.log('dragenter');
};

const handleDragOver = (event) => {
  event.preventDefault();

  console.log('drag over');
};

const handleDragEnd = (event) => {
  event.preventDefault();

  console.log('drag end');
};

const handleDrop = async (event) => {
  event.preventDefault();

  const link = event.dataTransfer.getData('Text');

  console.log('drag  DRop', link);
};

export { handleDragEnd, handleDragEnter, handleDragOver, handleDrop };
