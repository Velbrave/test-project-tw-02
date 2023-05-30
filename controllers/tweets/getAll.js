const { Content } = require('../../models/tweet');

const getAll = async (req, res, next) => {
  const result = await Content.find({});
  res.json(result);
};

module.exports = getAll;
