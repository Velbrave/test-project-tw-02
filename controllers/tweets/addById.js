const { Content } = require('../../models/tweet');

const addById = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Content.create({ ...req.body, owner });
  res.status(201).json(result);
};
module.exports = addById;
