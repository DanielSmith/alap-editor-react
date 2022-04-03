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

  alert(link);
  try {
    // need a better way of specifying where the netlify server is for dev..
    const res = await fetch('/.netlify/functions/get-site-data', {
      method: 'POST',
      body: JSON.stringify({ sitelink: link }),
    });

    const data = await res.json();
    console.dir(data);
  } catch (err) {
    console.error(err);
  }
};

export { handleDragEnd, handleDragEnter, handleDragOver, handleDrop };
