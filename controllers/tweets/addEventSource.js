const { Content } = require('../../models/tweet');

const addTweet = async (request, response, next) => {
  const result = await Content.create(request.body);
  response.status(201).write(`data: ${JSON.stringify(result)}\n\n`);
};

module.exports = addTweet;
