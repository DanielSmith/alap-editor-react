// save-data.js
// ignore this...
// going to update this when I do
// the react version (since it is a serverless
// function, this will be updated then)

// I am going to redo this as FQL...
// I want to be able to update, or create if needed

const axios = require("axios");
require("dotenv").config();
const { CREATE_CONFIG } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event, context) => {
  const name = "samplesave";
  const jsondata = event.body;

  const variables = { name, jsondata };

  try {
    const { createLink: createdLink } = await sendQuery(CREATE_CONFIG, variables);

    return formattedResponse(200, createdLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
