const { Content } = require('../../models/tweet');
const { RequestError } = require('../../helpers');

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Content.findByIdAndDelete(id, req.body);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(204).send(result);
};
module.exports = deleteById;
