const { Content } = require('../../models/tweet');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Content.find({ owner }).populate('owner', 'name email');
  res.json(result);
};

module.exports = getAll;
