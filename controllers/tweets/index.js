const getAll = require('./getAll');
const getById = require('./getById');
const addById = require('./addById');
const deleteById = require('./deleteById');
const updateById = require('./updateById');
const addTweet = require('./addEventSource');
const eventsHandler = require('./getEventSource');

module.exports = {
  getAll,
  getById,
  addById,
  deleteById,
  updateById,
  addTweet,
  eventsHandler,
};
