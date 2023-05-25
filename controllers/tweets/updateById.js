const { Content } = require('../../models/tweet');
const { RequestError } = require('../../helpers');

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Content.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};
module.exports = updateById;
