const {  } = require('./test/utils/errors');

module.exports = async function Test2 (server, queries) {
    const response = await server.query(queries); // Will return an array with the results, empty array or error
    return JSON.parse(response);
}
