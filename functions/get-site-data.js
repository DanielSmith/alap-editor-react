exports.handler = async (event, context) => {
  const meta = require("meta-grabber");

  const allBody = JSON.parse(event.body);
  const { sitelink } = JSON.parse(event.body);

  try {
    const res = meta(sitelink);
    console.dir(res);
    return {
      statusCode: 200,
      body: JSON.stringify({ res: res }),
    };
  } catch (error) {
    console.dir(error);
  }
};
