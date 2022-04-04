import ShortUniqueId from 'short-unique-id';
import { useStore } from '../store/states';

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

// const createTagFromURL = (str) => {
//   const url = document.createElement('a');
//   url.href = str;

//   const elems = url.hostname.split('.');
//   elems.pop();
//   return elems.join('_');
// };

// const handleDrop = async (event) => {
//   event.preventDefault();

//   const suid = new ShortUniqueId();
//   const link = event.dataTransfer.getData('Text');
//   const addEditItem = useStore((state) => state.addEditItem);
//   const patchItem = useStore((state) => state.patchItem);

//   try {
//     // need a better way of specifying where the netlify server is for dev..
//     const res = await fetch('/.netlify/functions/get-site-data', {
//       method: 'POST',
//       body: JSON.stringify({ sitelink: link }),
//     });

//     const data = await res.json();
//     console.dir(data);

//     const url = data.res.url || link;
//     let tags = createTagFromURL(url);

//     if (data.res.keywords) {
//       tags += `, ${data.res.keywords}`;
//     }

//     const cloneName = suid();
//     const itemID = `_new_item_${cloneName}`;

//     const newEditEntryItem = {
//       id: cloneName,
//       itemID: itemID,
//       label: data.res.title,
//       url: url,
//       tags: tags,
//       newItem: true,
//     };

//     patchItem(itemID, newEditEntryItem);
//     addEditItem(itemID);
//   } catch (err) {
//     console.error(err);
//   }
// };

export { handleDragEnd, handleDragEnter, handleDragOver };
