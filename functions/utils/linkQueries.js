// ignore most of this
// I have decided to handle the creation and update
// queries by using FQL
// I will do that update when I do the
// React client... and it will apply over here for
// the Vue one as well (these are serverless functions)

// need to figure this one out..
const GET_CONFIG = `
# Write your query or mutation here
query{
  allLinks{
    data {
      _id
      name
      jsondata
    }
  }
}`;

const CREATE_CONFIG = `
  mutation($name: String!, $jsondata: String! ) {
    createAlapConfig( data: { name:$name, jsondata:$jsondata }) {
      name
      jsondata
    }
  }
`;

// not using yet
const UPDATE_CONFIG = `
mutation($id: ID!, $name: String!, $jsondata: String! ) {
  updateAlapConfig( id: $id, data: { name:$name, jsondata:$jsondata }) {
    name
    jsondata
  }
}
// not using yet
`;

const DELETE_CONFIG = `
  mutation($id: ID!) {
    deleteAlapConfig( id: $id) {
      _id
    }
  }
`;

module.exports = {
  GET_CONFIG,
  CREATE_CONFIG,
  UPDATE_CONFIG,
  DELETE_CONFIG,
};
