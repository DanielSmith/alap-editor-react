// load-data.js
// not being used at this time
// going to update this when I do
// the react version (since it is a serverless
// function, this will be updated then)

exports.handler = async (event, context) => {
  const allBody = JSON.parse(event.body);
  const { sitelink } = JSON.parse(event.body);

  console.log("load  data.... " + allBody);
};
